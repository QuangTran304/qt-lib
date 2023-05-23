// Default browser font size is 16px
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
const BASE_FONT_SIZE = 16;

// To understand how this works, see: https://typescale.com
// Take any font size value in pixels & divide it by 16 (base) === rem value
export function pxToRem(pixels: number) {
  return `${pixels / BASE_FONT_SIZE}rem`;
}
