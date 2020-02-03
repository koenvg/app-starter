import * as NavigationTypes from "./types";
import { NavigationItems } from "./NavigationItems";
import React, { SFC } from "react";
import { ListSubheader } from "@material-ui/core";

export interface Props {
  item: NavigationTypes.NavigationGroup;
}

export const NavigationGroup: SFC<Props> = ({ item }) => {
  return (
    <div>
      <ListSubheader>{item.title}</ListSubheader>
      <NavigationItems items={item.children} />
    </div>
  );
};

NavigationGroup.displayName = "NavigationGroup";
