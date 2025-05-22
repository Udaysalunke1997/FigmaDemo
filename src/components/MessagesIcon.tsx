import { FunctionComponent } from "react";
import "./MessagesIcon.css";

export type MessagesIconType = {
  className?: string;

  /** Variant props */
  newText?: boolean;
  selected?: string;
  size?: string;
  style?: string;
};

const MessagesIcon: FunctionComponent<MessagesIconType> = ({
  className = "",
  newText = false,
  selected = "On",
  size = "L",
  style = "Icon",
}) => {
  return (
    <div
      className={`messages-icon ${className}`}
      data-newText={newText}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <img className="group-icon1" loading="lazy" alt="" src="/group-1.svg" />
    </div>
  );
};

export default MessagesIcon;
