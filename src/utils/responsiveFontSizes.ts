import { pxToRem } from "./pxToRem";

/**
 *  This function returns a responsive font size object with
 *  different font sizes for different screen sizes (media queries).
 *
 *  @param small - The font size for small screens.
 *  @param medium - The font size for medium screens.
 *  @param large - The font size for large screens.
 */
export function responsiveFontSizes(
  small: number,
  medium: number,
  large: number
) {
  return {
    "@media (min-width: 0px)": {
      fontSize: pxToRem(small),
    },
    "@media (min-width: 600px)": {
      fontSize: pxToRem(small),
    },
    "@media (min-width: 900px)": {
      fontSize: pxToRem(medium),
    },
    "@media (min-width: 1200px)": {
      fontSize: pxToRem(large),
    },
  };
}
