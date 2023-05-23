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

const spacing = {
  xxs: "2px",
  xs: "4px",
  s: "8px",
  m: "16px",
  l: "24px",
  xl: "32px",
  xxl: "40px",
  xxl2: "48px",
  xxl3: "56px",
  xxl4: "64px",
  xxl5: "72px",
  xxl6: "80px",
  xxl7: "88px",
  xxl8: "96px",
} as const;

export default spacing;
