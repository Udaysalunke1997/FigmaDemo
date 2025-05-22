import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./DirectionalButton.css";

export type DirectionalButtonType = {
  className?: string;
  arrowTDDown?: string;

  /** Variant props */
  direction?: "Down" | "Left";
  size?: "T and D" | "Mobile";

  /** Style props */
  directionalButtonWidth?: CSSProperties["width"];
  directionalButtonPosition?: CSSProperties["position"];
  directionalButtonHeight?: CSSProperties["height"];
  directionalButtonTop?: CSSProperties["top"];
  directionalButtonRight?: CSSProperties["right"];
  directionalButtonBottom?: CSSProperties["bottom"];
  directionalButtonLeft?: CSSProperties["left"];
};

const DirectionalButton: FunctionComponent<DirectionalButtonType> = ({
  className = "",
  direction = "Down",
  size = "T and D",
  directionalButtonWidth,
  directionalButtonPosition,
  directionalButtonHeight,
  directionalButtonTop,
  directionalButtonRight,
  directionalButtonBottom,
  directionalButtonLeft,
  arrowTDDown,
}) => {
  const directionalButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: directionalButtonWidth,
      position: directionalButtonPosition,
      height: directionalButtonHeight,
      top: directionalButtonTop,
      right: directionalButtonRight,
      bottom: directionalButtonBottom,
      left: directionalButtonLeft,
    };
  }, [
    directionalButtonWidth,
    directionalButtonPosition,
    directionalButtonHeight,
    directionalButtonTop,
    directionalButtonRight,
    directionalButtonBottom,
    directionalButtonLeft,
  ]);

  return (
    <div
      className={`root ${className}`}
      data-direction={direction}
      data-size={size}
      style={directionalButtonStyle}
    >
      <img className="arrow-td-down" alt="" src={arrowTDDown} />
    </div>
  );
};

export default DirectionalButton;
