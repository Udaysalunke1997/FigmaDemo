import { FunctionComponent } from "react";
import "./EmailIcon.css";

export type EmailIconType = {
  className?: string;

  /** Variant props */
  size?: string;
  state?: string;
  type?: string;
};

const EmailIcon: FunctionComponent<EmailIconType> = ({
  className = "",
  size = "S",
  state = "Default",
  type = "Icon",
}) => {
  return (
    <div
      className={`email-icon ${className}`}
      data-size={size}
      data-state={state}
      data-type={type}
    >
      <img
        className="os-email-mobile"
        loading="lazy"
        alt=""
        src="/os-email--mobile@2x.png"
      />
    </div>
  );
};

export default EmailIcon;
