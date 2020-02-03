import { styled } from "components";
import { List } from "@material-ui/core";

export const StyledList = styled(List)`
  .MuiListItemIcon-root {
    min-width: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const NavigationBarLogo = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-transform: uppercase;

  img {
    height: 32px;
    padding: 0 ${({ theme }) => theme.spacing(1)}px;
  }
`;
