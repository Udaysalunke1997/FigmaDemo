import { FunctionComponent } from "react";
import DirectionalButton from "./DirectionalButton";
import "./ExpandCollapseMainNavOptio.css";

export type ExpandCollapseMainNavOptioType = {
  className?: string;

  /** Variant props */
  option?: 1;
  type?: string;
};

const ExpandCollapseMainNavOptio: FunctionComponent<
  ExpandCollapseMainNavOptioType
> = ({ className = "", option = 1, type = "Expand" }) => {
  return (
    <div
      className={`expandcollapse-main-nav-optio ${className}`}
      data-option={option}
      data-type={type}
    >
      <div className="expandcollapse-main-nav-optio-child" />
      <div className="expandcollapse-main-nav-optio-item" />
      <DirectionalButton
        direction="Left"
        size="Mobile"
        directionalButtonWidth="39.17%"
        directionalButtonPosition="absolute"
        directionalButtonHeight="39.17%"
        directionalButtonTop="31.25%"
        directionalButtonRight="29.58%"
        directionalButtonBottom="29.58%"
        directionalButtonLeft="31.25%"
        arrowTDDown="/arrow--mobile--left.svg"
      />
    </div>
  );
};

export default ExpandCollapseMainNavOptio;
