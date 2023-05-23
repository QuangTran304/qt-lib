/**
 * This module is used to extend the MUI's theme.
 * Read examples about 'module augmentation' here:
 *
 * https://mui.com/material-ui/customization/theming/#custom-variables
 * https://mui.com/material-ui/customization/palette/#adding-new-colors
 */
import type { Theme, ThemeOptions } from "@mui/material/styles";

interface SpacingOptions {
  /** Value: 2px */
  xxs: string;
  /** Value: 4px */
  xs: string;
  /** Value: 8px */
  s: string;
  /** Value: 16px */
  m: string;
  /** Value: 24px */
  l: string;
  /** Value: 32px */
  xl: string;
  /** Value: 40px */
  xxl: string;
  /** Value: 48px */
  xxl2: string;
  /** Value: 56px */
  xxl3: string;
  /** Value: 64px */
  xxl4: string;
  /** Value: 72px */
  xxl5: string;
  /** Value: 80px */
  xxl6: string;
  /** Value: 88px */
  xxl7: string;
  /** Value: 96px */
  xxl8: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    customSpacing: SpacingOptions;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customSpacing?: SpacingOptions;
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    assistiveText: React.CSSProperties;
    labelLarge: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;
    labelTiny: React.CSSProperties;
    labelTinyHeavy: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    buttonSmall: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    assistiveText?: React.CSSProperties;
    labelLarge?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;
    labelTiny?: React.CSSProperties;
    labelTinyHeavy?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
  }
}

// Declare additional options for Typography's VARIANT prop
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    assistiveText: true;
    labelLarge: true;
    labelMedium: true;
    labelSmall: true;
    labelTiny: true;
    labelTinyHeavy: true;
    buttonLarge: true;
    buttonSmall: true;
  }
}
