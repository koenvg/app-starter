import { NavigationBarLogo } from "./Sidebar.styled";
import logo from "./logo.png";
import React, { SFC } from "react";
import { Drawer, makeStyles, createStyles, Theme } from "@material-ui/core";
import { Navigation } from "components";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar as any,
  }),
);

export const Sidebar: SFC = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <NavigationBarLogo>
        <img src={logo} alt="Logo" />
        Company name
      </NavigationBarLogo>
      <Navigation navigation={[{ id: "home", title: "Home", url: "/", type: "item", icon: <HomeIcon /> }]} />
    </Drawer>
  );
};

Sidebar.displayName = "SideBar";
