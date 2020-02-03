import { usePortal } from "./usePortal";
import { ConfirmDialog } from "./ConfirmDialog";
import { ThemeProvider } from "../themeProvider";
import React from "react";
import ReactDOM from "react-dom";

export interface Props {
  title: string;
  onConfirm?: () => Promise<unknown>;
}

export const useConfirmDialog = () => {
  const target = usePortal();

  React.useEffect(() => {
    return () => ReactDOM.unmountComponentAtNode(target);
  }, [target]);

  const confirm = React.useCallback(
    ({ title, onConfirm }: Props) => {
      return new Promise<boolean>(resolve => {
        const handleFinish = (isConfirmed: boolean) => {
          ReactDOM.unmountComponentAtNode(target);
          resolve(isConfirmed);
        };

        ReactDOM.render(
          <ThemeProvider>
            <ConfirmDialog open title={title} onFinish={handleFinish} onConfirm={onConfirm} />
          </ThemeProvider>,
          target,
        );
      });
    },
    [target],
  );

  return [confirm];
};
