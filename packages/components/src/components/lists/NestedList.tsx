import React, { SFC } from "react";
import { ListItem, Collapse, List } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

export interface Props {
  header: JSX.Element;
  className?: string;
  dense?: boolean;
  startOpen?: boolean;
}

export const NestedList: SFC<Props> = ({ children, header, className, dense, startOpen = false }) => {
  const [open, setIsOpen] = React.useState(startOpen);
  const handleClick = React.useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  return (
    <>
      <ListItem button onClick={handleClick} className={className}>
        {header}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense={dense}>
          {children}
        </List>
      </Collapse>
    </>
  );
};

NestedList.displayName = "NestedList";
