import styled from "@emotion/styled";

export const StyledThumbnail = styled.img`
  width: 100px;
  margin: 0.5em;
  border-radius: 0.5em;

  &:hover {
    rotate: 6deg;
  }

  &:active {
    scale: 0.95;
  }
`;