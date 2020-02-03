import { ConfirmDialog } from "./ConfirmDialog";
import { useConfirmDialog } from "./useConfirmDialog";
import { Button } from "../button";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Dialog/ConfirmDialog", module)
  .add("ConfirmDialog", () => {
    const [open, setOpen] = React.useState(false);
    const onFinish = action("onFinish");

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <ConfirmDialog
          title="Some title"
          open={open}
          onFinish={value => {
            onFinish(value);
            setOpen(false);
          }}
        />
      </>
    );
  })
  .add("Hooks", () => {
    const [confirm] = useConfirmDialog();
    const onFinish = action("onFinish");
    const handleClick = async () => {
      const result = await confirm({ title: "This uses react hooks for rendering" });
      onFinish(result);
    };
    return <Button onClick={handleClick}>Confirm me</Button>;
  });
