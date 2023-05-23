/**
 *  NOTE: You'll see 'as const' at certain places in the code. This is known as a 'const assertion' in TypeScript.
 *  Learn more: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 *
 *  For example,
 *  const greeting = "hello" as const;
 *  const numbers = [1, 2, 3] as const;
 *
 *  ==> The type of 'greeting' is 'hello' (not string) and the type of 'numbers' is [1, 2, 3] (not number[])
 *  We narrow down the type of the variable to its literal value.
 */
import { PaletteOptions } from "@mui/material";

const PRIMARY = {
  main: "#FF3000",
  // main: "#FCA311",
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  main: "#15284C",
  // main: "#8F95D3",
  contrastText: "#FFFFFF",
};

const ERROR = {
  main: "#FF5630",
  contrastText: "#FFFFFF",
};

const WARNING = {
  main: "#FFAB00",
  contrastText: "#FFFFFF",
};

const INFO = {
  main: "#00B8D9",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  main: "#36B37E",
  contrastText: "#FFFFFF",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

// Common colors across light and dark palette
const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  error: ERROR,
  warning: WARNING,
  info: INFO,
  success: SUCCESS,
  grey: GREY,
};

export default function palette(themeMode: "light" | "dark") {
  const light: PaletteOptions = {
    mode: "light",
    ...COMMON,
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
    },
    text: {
      primary: PRIMARY.main,
    },
  } as const;

  const dark: PaletteOptions = {
    mode: "dark",
    ...COMMON,
    background: {
      paper: "#15284C",
      default: "#15284C",
    },
    text: {
      primary: COMMON.common.white,
    },
  } as const;

  return themeMode === "light" ? light : dark;
}
