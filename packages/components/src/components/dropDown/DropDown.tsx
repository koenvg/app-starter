import { DropDownItemProps, DropDownItem } from "./DropDownItem";
import { Caret } from "./Caret";
import { Button } from "../button";
import { Popper, Grow, Paper, ClickAwayListener, MenuList, ButtonProps } from "@material-ui/core";
import React, { SFC } from "react";

export interface Props {
  dropDownItems: DropDownItemProps[];
  onClick: (item: DropDownItemProps) => void;
  buttonProps?: ButtonProps;
}

export const DropDown: SFC<Props> = ({ dropDownItems, children, buttonProps, onClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = React.useCallback(
    event => {
      if (anchorEl && anchorEl.contains(event.target)) {
        setAnchorEl(null);
      } else {
        setAnchorEl(event.currentTarget);
      }
    },
    [anchorEl],
  );

  const handleItemClick = React.useCallback(
    (param: DropDownItemProps) => {
      setAnchorEl(null);
      onClick(param);
    },
    [onClick],
  );

  const handleCloseAway = React.useCallback(
    (event: React.MouseEvent<Document, MouseEvent>) => {
      if (anchorEl.contains(event.target)) {
        return;
      }
      setAnchorEl(null);
    },
    [anchorEl],
  );

  const isActive = Boolean(anchorEl);
  return (
    <div>
      <Button
        {...buttonProps}
        aria-label="Notifications"
        aria-owns={anchorEl ? "menu-list" : null}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {children}
        <Caret />
      </Button>

      <Popper open={isActive} anchorEl={anchorEl} transition disablePortal placement={"bottom-start"}>
        {() => (
          <Grow in={isActive} style={{ transformOrigin: "0 0 0" }}>
            <Paper>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu">
                  {dropDownItems.map(({ id, label }) => {
                    return <DropDownItem label={label} id={id} key={id} onClick={handleItemClick} />;
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

DropDown.displayName = "DropDown";
