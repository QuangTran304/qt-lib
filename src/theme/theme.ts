import { ThemeOptions, createTheme } from "@mui/material";

import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import componentOverrides from "./componentOverrides";

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
// Need to assign the overridden 'components' to 'theme' AFTER it's been created
// so that we can access the theme properties INSIDE each of these customized components.
theme.components = componentOverrides(theme);

export default theme;

// ANOTHER WAY TO DO IT:
// let theme: Theme = createTheme(themeOptions);
// theme = createTheme({ ...theme, components: componentOverrides(theme) });
