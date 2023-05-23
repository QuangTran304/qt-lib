/**
 * This hook is used to check wheather we're at a certain screen size.
 * It watches the screen size changes and returns a boolean value.
 *
 * Customized breakpoints (as in Yael's design) are used:
 * - xs: 0px
 * - sm: 375px
 * - md: 834px
 * - lg: 1440px
 *
 * To customize these breakpoints, go to 'src/theme/index.ts'.
 */
import { useMediaQuery, useTheme } from "@mui/material";

type Value = "extraSmallPlus" | "smallPlus" | "mediumPlus" | "largePlus";

export default function useScreenSize(size: Value): boolean {
  const theme = useTheme();

  const isXSmallAndUp = useMediaQuery(theme.breakpoints.up("xs"));
  const isSmallAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMediumAndUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeAndUp = useMediaQuery(theme.breakpoints.up("lg"));

  if (size === "extraSmallPlus") {
    return isXSmallAndUp;
  } else if (size === "smallPlus") {
    return isSmallAndUp;
  } else if (size === "mediumPlus") {
    return isMediumAndUp;
  } else if (size === "largePlus") {
    return isLargeAndUp;
  }

  return false;
}
