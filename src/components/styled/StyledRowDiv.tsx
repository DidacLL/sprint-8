import styled from "@emotion/styled";

export const StyledRowDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f1f1f;
  text-align: left;
  padding: 1em;
  margin: 1em;
  min-width: 50vw;


  &:hover {
    color: darkgrey;
    background-color: #313131;
  }

  &:active {
    color: black;
    background-color: lightgray;
  }

  &:disabled {
    color: dimgray;
  }

  &:disabled:active {
    color: dimgray;
    background-color: inherit;
  }
`;