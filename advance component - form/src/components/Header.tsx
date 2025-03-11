import Buttons from "./UI/Buttons.tsx";
import { useTimersContext } from "./store/timersContext.tsx";

function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>React Timer</h1>

      <Buttons>{timersCtx.isRunning ? "Stop" : "Start"} Timers</Buttons>
    </header>
  );
}

export default Header;
