import { NavigationItem } from "./types";
import React, { SFC } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";

export interface Props {
  tabs: NavigationItem[];
}

export const TabNavigation: SFC<Props> = ({ tabs }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleChange = React.useCallback(
    (event: unknown, url: string) => {
      history.push(url);
    },
    [history],
  );
  const preventDefault = React.useCallback((event: React.MouseEvent) => event.preventDefault(), []);
  return (
    <Tabs
      value={pathname}
      textColor="primary"
      indicatorColor="primary"
      width="fixed"
      scrollButtons="off"
      onChange={handleChange}
    >
      {tabs.map(tab => {
        return (
          <Tab
            key={tab.url}
            component="a"
            href={tab.url}
            value={tab.url}
            title={tab.title}
            label={tab.title}
            onClick={preventDefault}
          />
        );
      })}
    </Tabs>
  );
};

TabNavigation.displayName = "TabNavigation";
