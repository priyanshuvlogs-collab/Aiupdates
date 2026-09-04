"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { Plan } from "@/lib/types";

interface PlanContextValue {
  plan: Plan;
  /** True once we're on the client and the plan has been read (avoids hydration flicker). */
  ready: boolean;
  upgrade: () => void;
  downgrade: () => void;
}

const PlanContext = createContext<PlanContextValue>({
  plan: "free",
  ready: false,
  upgrade: () => {},
  downgrade: () => {},
});

const STORAGE_KEY = "aiupdates.plan";
const PLAN_EVENT = "aiupdates:plan-change";

function subscribe(callback: () => void) {
  window.addEventListener(PLAN_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PLAN_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getPlanSnapshot(): Plan {
  return window.localStorage.getItem(STORAGE_KEY) === "pro" ? "pro" : "free";
}

function setStoredPlan(plan: Plan) {
  window.localStorage.setItem(STORAGE_KEY, plan);
  window.dispatchEvent(new Event(PLAN_EVENT));
}

export function PlanProvider({ children }: { children: ReactNode }) {
  const plan = useSyncExternalStore(subscribe, getPlanSnapshot, () => "free" as Plan);
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const upgrade = useCallback(() => setStoredPlan("pro"), []);
  const downgrade = useCallback(() => setStoredPlan("free"), []);

  return (
    <PlanContext.Provider value={{ plan, ready, upgrade, downgrade }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
