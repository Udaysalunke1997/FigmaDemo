import { FunctionComponent } from "react";
import "./LogOutIcon.css";

export type LogOutIconType = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const LogOutIcon: FunctionComponent<LogOutIconType> = ({
  className = "",
  selected = "Off",
  size = "L",
  style = "Nav Bar",
}) => {
  return (
    <div
      className={`log-out-icon ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <img
        className="sign-out-icon-2"
        loading="lazy"
        alt=""
        src="/sign-out-icon-2.svg"
      />
    </div>
  );
};

export default LogOutIcon;
