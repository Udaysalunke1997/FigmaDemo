import { FunctionComponent } from "react";
import "./CloseButton.css";

export type CloseButtonType = {
  className?: string;
  showCloseButton?: boolean;

  /** Variant props */
  size?: string;
};

const CloseButton: FunctionComponent<CloseButtonType> = ({
  className = "",
  size = "22x22",
  showCloseButton,
}) => {
  return (
    !!showCloseButton && (
      <div className={`close-button ${className}`} data-size={size}>
        <div className="close-button-child" />
        <img className="close-button-item" alt="" src="/group-162.svg" />
      </div>
    )
  );
};

export default CloseButton;
