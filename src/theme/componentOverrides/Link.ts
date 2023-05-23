export default function Link() {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover" as const, // This is known as "const assertion" / type narrowing in Typescript
      },
    },
  };
}
