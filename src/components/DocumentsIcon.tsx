import { FunctionComponent } from "react";
import "./DocumentsIcon.css";

export type DocumentsIconType = {
  className?: string;

  /** Variant props */
  alert1?: string;
  selected?: string;
  size?: string;
  state?: string;
  style?: string;
};

const DocumentsIcon: FunctionComponent<DocumentsIconType> = ({
  className = "",
  alert1 = "Default",
  selected = "On",
  size = "L",
  state = "Default",
  style = "Icon",
}) => {
  return (
    <div
      className={`documents-icon ${className}`}
      data-alert={alert1}
      data-selected={selected}
      data-size={size}
      data-state={state}
      data-style={style}
    >
      <div className="documents-icon-child" />
      <img className="group-icon2" loading="lazy" alt="" src="/group-2.svg" />
    </div>
  );
};

export default DocumentsIcon;
