import { FunctionComponent } from "react";
import "./SettingsIcon1.css";

export type SettingsIcon1Type = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const SettingsIcon1: FunctionComponent<SettingsIcon1Type> = ({
  className = "",
  selected = "On",
  size = "Mobile",
  style = "Icon Only",
}) => {
  return (
    <div
      className={`settings-icon ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <img className="vector-icon" alt="" src="/vector-1.svg" />
    </div>
  );
};

export default SettingsIcon1;
