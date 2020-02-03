import { NavigationItemsType } from "./types";
import { NavigationCollapse } from "./NavigationCollapse";
import { NavigationGroup } from "./NavigationGroup";
import { NavigationItem } from "./NavigationItem";
import React, { SFC } from "react";

export interface Props {
  items: NavigationItemsType;
}

export const NavigationItems: SFC<Props> = ({ items }) => {
  return (
    <>
      {items.map(item => {
        switch (item.type) {
          case "collapse":
            return <NavigationCollapse key={item.id} item={item} />;
          case "group":
            return <NavigationGroup key={item.id} item={item} />;
          default:
            return <NavigationItem key={item.id} item={item} />;
        }
      })}
    </>
  );
};

NavigationItems.displayName = "NavigationItems";
