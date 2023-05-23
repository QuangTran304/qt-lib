import { Components, Theme } from "@mui/material/styles";

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover" as const, // This is known as "const assertion" / type narrowing in Typescript
      },
    },
  };
}
