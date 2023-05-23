/**
 *  To learn more about overriding each of Material-UI components, visit:
 *  https://mui.com/material-ui/customization/theme-components/
 */
import { Theme } from "@mui/material/styles";

import Button from "./Button";
import Link from "./Link";

export default function componentOverrides(theme: Theme) {
  return {
    ...Button(theme),
    ...Link(theme),
  };
}
