import styled from "@emotion/styled";

export const StyledMainButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 0.5em;
  color: white;
  padding: 0.8em;
  font-weight: bold;

  &:hover {
    color: darkgrey;    
  }
  &:active{
    color: black;
    background-color: lightgray;
  }
  &:disabled{
    color: dimgray;
  }
  &:disabled:active {
    color: dimgray;
    background-color: inherit;
  }
`;