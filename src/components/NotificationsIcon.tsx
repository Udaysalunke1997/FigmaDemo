import { FunctionComponent } from "react";
import MessagesIcon from "./MessagesIcon";
import "./NotificationsIcon.css";

export type NotificationsIconType = {
  className?: string;

  /** Variant props */
  notifsBubble?: string;
  selected?: string;
  size?: string;
  style?: string;
};

const NotificationsIcon: FunctionComponent<NotificationsIconType> = ({
  className = "",
  notifsBubble = "Off",
  selected = "On",
  size = "L",
  style = "Icon",
}) => {
  return (
    <div
      className={`notifications-icon ${className}`}
      data-notifsBubble={notifsBubble}
      data-selected={selected}
      data-size={size}
      data-style={style}
    >
      <div className="messages-icon2">
        <div className="messages-icon1">
          <MessagesIcon newText={false} selected="On" size="M" style="Icon" />
        </div>
      </div>
      <div className="wrapper">
        <b className="b">9+</b>
      </div>
    </div>
  );
};

export default NotificationsIcon;
