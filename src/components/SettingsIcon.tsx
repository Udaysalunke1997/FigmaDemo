import { FunctionComponent } from "react";
import SettingsIcon1 from "./SettingsIcon1";
import "./SettingsIcon.css";

export type SettingsIconType = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const SettingsIcon: FunctionComponent<SettingsIconType> = ({
  className = "",
  selected = "On",
  size = "M",
  style = "Icon",
}) => {
  return (
    <div
      className={`settings-icon2 ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <div className="vector-parent">
        <img className="vector-icon1" loading="lazy" alt="" src="/vector.svg" />
        <div className="settings-icon1">
          <SettingsIcon1 selected="On" size="Mobile" style="Icon Only" />
        </div>
      </div>
    </div>
  );
};

export default SettingsIcon;
