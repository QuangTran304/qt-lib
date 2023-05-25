import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "../src/theme/theme";

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};
