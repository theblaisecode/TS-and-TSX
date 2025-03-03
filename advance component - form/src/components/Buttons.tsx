import { AnchorProps, ButtonProps } from "../types/types.tsx";

function Buttons(props: ButtonProps | AnchorProps) {
  if (props.element === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Buttons;
