import { FunctionComponent } from "react";
import "./AboutUsIcon.css";

export type AboutUsIconType = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const AboutUsIcon: FunctionComponent<AboutUsIconType> = ({
  className = "",
  selected = "Off",
  size = "L",
  style = "Nav Bar",
}) => {
  return (
    <div
      className={`about-us-icon1 ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <img
        className="subtract-icon"
        loading="lazy"
        alt=""
        src="/subtract.svg"
      />
    </div>
  );
};

export default AboutUsIcon;
