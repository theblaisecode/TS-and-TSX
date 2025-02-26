import { InfoBoxProps } from "../types/types.tsx";

function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  // const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${propsseverity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
