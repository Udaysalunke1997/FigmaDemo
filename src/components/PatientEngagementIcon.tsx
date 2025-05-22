import { FunctionComponent } from "react";
import "./PatientEngagementIcon.css";

export type PatientEngagementIconType = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const PatientEngagementIcon: FunctionComponent<PatientEngagementIconType> = ({
  className = "",
  selected = "Off",
  size = "M",
  style = "Nav Bar",
}) => {
  return (
    <div
      className={`patient-engagement-icon ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <img
        className="patient-engagement-icon-child"
        alt=""
        src="/vector-325.svg"
      />
      <img
        className="patient-engagement-icon-item"
        alt=""
        src="/vector-326.svg"
      />
      <img
        className="patient-engagement-icon-inner"
        loading="lazy"
        alt=""
        src="/group-674.svg"
      />
    </div>
  );
};

export default PatientEngagementIcon;
