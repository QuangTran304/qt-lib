import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  /** The display label of the button */
  label: string;
}

const Button = ({ label, ...restOfProps }: ButtonProps) => {
  return <MuiButton {...restOfProps}>{label}</MuiButton>;
};

export default Button;
