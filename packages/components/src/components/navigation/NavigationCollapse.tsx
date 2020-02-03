import * as NavigationTypes from "./types";
import { NavigationItems } from "./NavigationItems";
import { StyledNestedList } from "./Navigation.styled";
import { ListItemText, ListItemIcon } from "@material-ui/core";
import React, { SFC } from "react";
import { useLocation } from "react-router";

export interface Props {
  item: NavigationTypes.NavigationCollapse;
}

export const NavigationCollapse: SFC<Props> = ({ item }) => {
  const { pathname } = useLocation();
  const startOpen = React.useMemo(() => {
    return item.children.some(item => item.url === pathname);
  }, [item.children, pathname]);

  return (
    <StyledNestedList
      startOpen={startOpen}
      dense
      header={
        <>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </>
      }
    >
      <NavigationItems items={item.children} />
    </StyledNestedList>
  );
};

NavigationCollapse.displayName = "NavigationCollapse";
