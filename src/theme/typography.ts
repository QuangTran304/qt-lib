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
import { pxToRem } from "../utils/pxToRem";
import { responsiveFontSizes } from "../utils/responsiveFontSizes";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const primaryFont = "Lexend, sans-serif";

const typography: TypographyOptions = {
  fontFamily: primaryFont,
  h1: {
    fontWeight: 500,
    lineHeight: 1.05,
    letterSpacing: "-2.5px",
    fontSize: pxToRem(88),
    ...responsiveFontSizes(56, 72, 88),
  },
  h2: {
    fontWeight: 500,
    lineHeight: 1.05,
    letterSpacing: "-2px",
    fontSize: pxToRem(64),
    ...responsiveFontSizes(48, 56, 64),
  },
  h3: {
    fontWeight: 500,
    lineHeight: 1.15,
    letterSpacing: "-1px",
    fontSize: pxToRem(48),
    ...responsiveFontSizes(36, 40, 48),
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "-0.7px",
    fontSize: pxToRem(32),
    ...responsiveFontSizes(28, 30, 32),
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.3,
    letterSpacing: "-0.3px",
    fontSize: pxToRem(24),
  },
  h6: {
    fontWeight: 400,
    lineHeight: 1.35,
    letterSpacing: "-0.2px",
    fontSize: pxToRem(21),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.45,
    letterSpacing: "-0.15px",
    fontSize: pxToRem(18),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 1.45,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(16),
  },
  body1: {
    fontWeight: 300,
    lineHeight: 1.45,
    letterSpacing: "0px",
    fontSize: pxToRem(18),
  },
  body2: {
    fontWeight: 300,
    lineHeight: 1.45,
    letterSpacing: "0px",
    fontSize: pxToRem(16),
  },
  body3: {
    fontWeight: 300,
    lineHeight: 1.45,
    letterSpacing: "0px",
    fontSize: pxToRem(14),
  },
  assistiveText: {
    fontWeight: 300,
    lineHeight: 1.3,
    letterSpacing: "0px",
    fontSize: pxToRem(13),
  },
  labelLarge: {
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(16),
  },
  labelMedium: {
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(14),
  },
  labelSmall: {
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(12),
  },
  labelTiny: {
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(11),
  },
  labelTinyHeavy: {
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(11),
  },
  button: {
    // Override default button typography
    fontWeight: 500,
    lineHeight: 1.05,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(14),
    textTransform: "none",
  },
  buttonLarge: {
    fontWeight: 500,
    lineHeight: 1.05,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(16),
    textTransform: "none",
  },
  buttonSmall: {
    fontWeight: 500,
    lineHeight: 1.05,
    letterSpacing: "-0.1px",
    fontSize: pxToRem(14),
    textTransform: "none",
  },
} as const;

export default typography;
