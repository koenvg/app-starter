import * as NavigationTypes from "./types";
import { StyledListItem } from "./Navigation.styled";
import React, { SFC } from "react";
import { ListItemText, ListItemIcon } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

export interface Props {
  item: NavigationTypes.NavigationItem;
}

export const NavigationItem: SFC<Props> = ({ item }) => {
  const { pathname } = useLocation();

  const selected = React.useMemo(() => {
    if (item.selected) {
      return item.selected(pathname);
    }
    return pathname === item.url;
  }, [item, pathname]);
  return (
    <StyledListItem button component={Link} to={item.url} selected={selected} color="primary">
      {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
      <ListItemText primary={item.title} inset={!item.icon} />
    </StyledListItem>
  );
};

NavigationItem.displayName = "NavigationItem";
