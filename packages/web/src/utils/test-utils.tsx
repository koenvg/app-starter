import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "components";

const AllTheProviders: React.SFC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries" | "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
