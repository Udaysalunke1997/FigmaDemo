import { FunctionComponent } from "react";
import AboutUsIcon from "./AboutUsIcon";
import "./SettingsButton.css";

export type SettingsButtonType = {
  className?: string;
  settingName?: string;
  description?: string;

  /** Variant props */
  state?: "Default" | "Disabled";
};

const SettingsButton: FunctionComponent<SettingsButtonType> = ({
  className = "",
  state = "Default",
  settingName,
  description,
}) => {
  return (
    <div className={`main ${className}`} data-state={state}>
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="rectangle-container">
            <div className="frame-item" />
          </div>
          <AboutUsIcon
            selected="On"
            size="L"
            style="Icon"
            className="about-us-icon"
          />
        </div>
        <div className="setting-name-group">
          <b className="setting-name1">{settingName}</b>
          <div className="description1">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsButton;
