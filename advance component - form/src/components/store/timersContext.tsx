import { createContext, useContext } from "react";
import {
  TimersContextProviderProps,
  TimersContextValue,
} from "../../types/types.tsx";

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  
  if (timersCtx === null) {
    throw new Error("Something went wrong");
  }
}

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

export default TimersContextProvider;
