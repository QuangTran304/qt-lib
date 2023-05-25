import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

const Button = ({ label, ...restOfProps }: ButtonProps) => {
  return <MuiButton {...restOfProps}>{label}</MuiButton>;
};

export default Button;
