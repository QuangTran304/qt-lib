import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import GlobalStyles from "./globalStyles";
import theme from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MuiThemeProvider>
  );
}
