import { AppBar } from "@material-ui/core";
import { styled } from "components";

export const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    border: 0;
    /* z-index: ${({ theme }) => theme.zIndex.drawer + 1}; */
  }
`;
