import { InfoBoxProps } from "../types/types.tsx";

function InfoBox({ mode, severity, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
