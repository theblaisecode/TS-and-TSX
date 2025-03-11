import { useContext } from "react";
import Buttons from "./UI/Buttons.tsx";
import { TimersContext } from "./store/timersContext.tsx";

function Header() {
  const timersCtx = useContext(TimersContext)!;

  // if (timersCtx === null) {
  //   throw new Error("Something went wrong");
  // }

  return (
    <header>
      <h1>React Timer</h1>

      <Buttons>Stop Timers</Buttons>
    </header>
  );
}

export default Header;
