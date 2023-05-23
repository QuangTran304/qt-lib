import { CSSInterpolation, Theme } from "@mui/material/styles";
import { ButtonProps } from "@mui/material";

type DefaultProps = Partial<ButtonProps>;

/* NOTE: This 'StyleOverrides' type CANNOT be used in the styleOverrides property of the MuiButton component (near bottom).
Because TS will complain that custom props are created in THEME but not in BASE THEME. */

// type StyleOverrides = Partial<
//   OverridesStyleRules<keyof ButtonClasses, "MuiButton", Omit<Theme, "components">>
// >;

const Colors = ["primary", "secondary", "error", "info", "success", "warning"] as const;

export default function Button(theme: Theme) {
  const styledRoot = (ownerState: ButtonProps) => {
    const isContainedVariant = ownerState.variant === "contained";
    const isOutlinedVariant = ownerState.variant === "outlined";
    const isTextVariant = ownerState.variant === "text";
    const isSmallSize = ownerState.size === "small";
    const isLargeSize = ownerState.size === "large";

    // STYLES BASED ON VARIANT
    const baseStyle: CSSInterpolation = {
      // Contained variant
      ...(isContainedVariant && {
        color: theme.palette.common.white,
        border: "2px solid transparent",
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
          color: theme.palette.secondary.main,
          border: `2px solid ${theme.palette.secondary.main}`,
          backgroundColor: theme.palette.common.white,
        },
      }),
      // Outlined variant
      ...(isOutlinedVariant && {
        color: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.common.white,
        "&:hover": {
          color: theme.palette.common.white,
          border: `2px solid transparent`,

          backgroundColor: theme.palette.secondary.main,
        },
      }),
      // Text variant
      ...(isTextVariant && {
        color: theme.palette.secondary.main,
        "&:hover": {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
        },
      }),
    };

    // STYLES BASED ON SIZE
    const sizeStyle: CSSInterpolation = {
      ...(isSmallSize && {
        fontSize: theme.typography.buttonSmall.fontSize,
        borderRadius: "18px",
        height: 36,
        padding: "10px 16px",
      }),
      ...(isLargeSize && {
        fontSize: theme.typography.buttonLarge.fontSize,
        borderRadius: "28px",
        height: 56,
        padding: "20px 32px",
      }),
    };

    // STYLES BASED ON COLOR
    const colorStyle: CSSInterpolation = Colors.map((color) => ({
      ...(color === ownerState.color && {
        // Contained variant
        ...(isContainedVariant && {
          border: "2px solid transparent",
          backgroundColor: theme.palette[color].main,
          "&:hover": {
            color: theme.palette.secondary.main,
            border: `2px solid ${theme.palette.secondary.main}`,
            backgroundColor: theme.palette.common.white,
          },
        }),
      }),
    }));

    return [baseStyle, sizeStyle, colorStyle];
  };

  // MAIN RETURN
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
        size: "small",
      } as DefaultProps,

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => styledRoot(ownerState),
      },
    },
  };
}
