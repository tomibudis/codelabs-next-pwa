import styled from "styled-components";

interface Menu {
  isActive: boolean;
}

const highlightColor = "rgba(247, 240, 240, 0.3)";

export const MenuStyled = styled.div<Menu>`
  background-color: ${(props) => (props.isActive ? highlightColor : "none")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: $neutral-light-30;
  }
`;
