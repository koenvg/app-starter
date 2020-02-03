import React from "react";
import MaterialTable, { MaterialTableProps } from "material-table";

export const DataTable = <RowData extends object>({ ...props }: MaterialTableProps<RowData>) => {
  return (
    <MaterialTable
      {...props}
      options={{ paging: false, showTitle: false, searchFieldAlignment: "left", ...props.options }}
    />
  );
};

DataTable.displayName = "DataTable";
