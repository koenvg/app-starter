import { DataTable } from "./DataTable";
import React from "react";
import { storiesOf } from "@storybook/react";
import { Container } from "@material-ui/core";

const data = [
  { id: "First", label: "First" },
  { id: "Second", label: "Second and some longer label" },
  { id: "Third", label: "Third" },
];

storiesOf("Components/DataTable", module).add("Basic table", () => (
  <Container>
    <DataTable
      columns={[
        { title: "ID", field: "id" },
        { title: "Label", field: "label" },
      ]}
      data={data}
      title="This is the story test"
    />
  </Container>
));
