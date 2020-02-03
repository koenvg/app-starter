import { NavigationItemsType } from "./types";
import { NavigationItems } from "./NavigationItems";
import React, { SFC } from "react";
import { List } from "@material-ui/core";

export interface Props {
  navigation: NavigationItemsType;
}

export const Navigation: SFC<Props> = ({ navigation }) => {
  return (
    <List dense>
      <NavigationItems items={navigation} />
    </List>
  );
};

Navigation.displayName = "Navigation";
