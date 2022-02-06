import React, { useMemo } from "react";
import cx from "classnames";

import { StyledText } from "./Text.styled";

type size = "normal" | "small" | "extraSmall";
type color = "light" | "dark";

interface TextProps {
  children: React.ReactNode;
  size?: size;
  color?: color;
}

const Text: React.FC<TextProps> = ({ children, size, color }) => {
  const theme = useMemo(() => {
    const defaultTheme = "text-dark";
    switch (color) {
      case "dark":
        return defaultTheme;
      case "light":
        return "text-light";
      default:
        return defaultTheme;
    }
  }, [color]);

  return (
    <StyledText color={color} className={cx("m-0", theme)} size={size}>
      {children}
    </StyledText>
  );
};

export default Text;
