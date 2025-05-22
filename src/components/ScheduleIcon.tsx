import { FunctionComponent } from "react";
import "./ScheduleIcon.css";

export type ScheduleIconType = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const ScheduleIcon: FunctionComponent<ScheduleIconType> = ({
  className = "",
  selected = "Off",
  size = "M",
  style = "Nav Bar",
}) => {
  return (
    <div
      className={`schedule-icon ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <img
        className="schedule-icon-child"
        loading="lazy"
        alt=""
        src="/group-666.svg"
      />
    </div>
  );
};

export default ScheduleIcon;
