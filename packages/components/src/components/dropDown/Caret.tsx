import { styled } from "../themeProvider";

export const Caret = styled.b`
  transition: all 150ms ease-in;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 4px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
`;
