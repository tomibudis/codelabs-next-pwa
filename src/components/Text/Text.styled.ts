import styled, { css } from "styled-components";

import { SIZE } from "#constants/theme";

const getSizeFont = (size: string | undefined) => {
  const defaultSize = css`
    font-size: 16px;
    line-height: 1.63;
  `;
  switch (size) {
    case SIZE.NORMAL:
      return defaultSize;
    case SIZE.SMALL:
      return css`
        font-size: 14px;
        line-height: 1.71;
      `;
    case SIZE.EXTRA_SMALL:
      return css`
        font-size: 12px;
        line-height: 1.67;
      `;
    default:
      return defaultSize;
  }
};

interface StyledTextProps {
  size?: string;
}

export const StyledText = styled.p<StyledTextProps>`
  ${({ size }) => getSizeFont(size)}
`;
