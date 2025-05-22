import { FunctionComponent } from "react";
import "./HomeIcon.css";

export type HomeIconType = {
  className?: string;

  /** Variant props */
  selected?: string;
  size?: string;
  style?: string;
};

const HomeIcon: FunctionComponent<HomeIconType> = ({
  className = "",
  selected = "On",
  size = "L",
  style = "Icon",
}) => {
  return (
    <div
      className={`home-icon ${className}`}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <img className="vector-icon2" loading="lazy" alt="" src="/vector-2.svg" />
    </div>
  );
};

export default HomeIcon;
