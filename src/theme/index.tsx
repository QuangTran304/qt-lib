import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material";

import GlobalStyles from "./globalStyles";
import componentOverrides from "./componentOverrides";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Hardcoded for now. This should come from a setting context in the future.
  const themeMode = "light";

  // Could wrap theme options around a useMemo hook when themeMode changes often.
  const themeOptions: ThemeOptions = {
    palette: palette(themeMode),
    typography: typography,
    customSpacing: spacing,
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 834,
        lg: 1440,
        xl: 1536,
      },
    },
  };

  const theme = createTheme(themeOptions);

  // Need to override components AFTER creating the theme, then re-assign it back to theme
  // so that we can access the theme properties INSIDE each of these customized components.
  theme.components = componentOverrides(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MuiThemeProvider>
  );
}
