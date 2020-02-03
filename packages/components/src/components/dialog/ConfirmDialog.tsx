import { Button } from "../button";
import React from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, Typography } from "@material-ui/core";

export interface Props {
  onFinish: (confirmed: boolean) => void;
  onConfirm?: () => Promise<unknown>;
  title: string;
  open: boolean;
}

export const ConfirmDialog: React.SFC<Props> = ({ onFinish, title, open, onConfirm }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error>();
  const handleClose = React.useCallback(() => onFinish(false), [onFinish]);

  const handleOk = React.useCallback(async () => {
    setLoading(true);
    try {
      if (onConfirm) {
        await onConfirm();
      }
      onFinish(true);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  }, [onConfirm, onFinish]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{error && <Typography color="error">{error.message}</Typography>}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleOk} color="primary" autoFocus loading={loading}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.displayName = "ConfirmDialog";
