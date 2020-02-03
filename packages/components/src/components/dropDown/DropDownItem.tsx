import React, { SFC } from "react";
import { MenuItem } from "@material-ui/core";

export interface DropDownItemProps {
  id: string;
  label: string;
}

export interface Props extends DropDownItemProps {
  onClick: (params: DropDownItemProps) => void;
}

export const DropDownItem: SFC<Props> = ({ label, onClick, id }) => {
  const handleClick = React.useCallback(() => onClick({ label, id }), [id, label, onClick]);
  return <MenuItem onClick={handleClick}>{label}</MenuItem>;
};

DropDownItem.displayName = "DropDownItem";
