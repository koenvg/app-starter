import { styled, css } from "../themeProvider";
import { NestedList } from "../lists";
import { ListItem } from "@material-ui/core";

const ListItemStyle = css`
  width: calc(100% - 16px);
  border-radius: 0px 20px 20px 0px;
  height: 40px;
`;

const selectedStyle = css`
  &:hover,
  & {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.getContrastText(theme.palette.primary.main)};
    .MuiListItemIcon-root {
      color: ${({ theme }) => theme.palette.getContrastText(theme.palette.primary.main)};
    }
  }
`;

export const StyledListItem = (styled(ListItem)`
  &&& {
    ${ListItemStyle}

    ${({ selected }) => (selected ? selectedStyle : "")}
  }
` as unknown) as typeof ListItem;

export const StyledNestedList = styled(NestedList)`
  && {
    ${ListItemStyle}
  }
`;
