import { createContext } from "react";
import {
  TimersContextProviderProps,
  TimersContextValue,
} from "../../types/types.tsx";

export const TimersContext = createContext<TimersContextValue | null>(null);

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersCoontext.Provider value={ctx}>{children}</TimersCoontext.Provider>
  );
}

export default TimersContextProvider