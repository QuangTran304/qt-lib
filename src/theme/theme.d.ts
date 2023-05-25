/**
 *  NOTE: This files is to overcome the type error from "vite-plugin-dts" - type definition generator.
 *  
 *  In particular, when run "npm run build", the plugin shows that "customSpacing" is not defined in "Theme".
 *  However, it was clearly defined & declared as in MUI documentation. Running "npx tsc" shows no error.
 * 
 *  This is a workaround to overcome the type error.
 */
import { Theme as MuiTheme } from "@mui/material/styles";
import { SpacingOptions } from "./spacing";

export interface Theme extends MuiTheme {
  customSpacing: SpacingOptions;
}
