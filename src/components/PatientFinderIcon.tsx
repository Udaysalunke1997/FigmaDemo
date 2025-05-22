import { FunctionComponent } from "react";
import "./PatientFinderIcon.css";

export type PatientFinderIconType = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const PatientFinderIcon: FunctionComponent<PatientFinderIconType> = ({
  className = "",
  selected = "On",
  size = "M",
  style = "Nav Bar",
}) => {
  return (
    <div
      className={`patient-finder-icon ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <div className="common-actions" />
      <img className="group-icon" loading="lazy" alt="" src="/group.svg" />
      <img
        className="search-icon"
        loading="lazy"
        alt=""
        src="/search-icon.svg"
      />
    </div>
  );
};

export default PatientFinderIcon;
