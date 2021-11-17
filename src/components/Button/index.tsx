import { ButtonProps } from "@mui/material";
import { MUIButton } from "./styled";

type ButtonProp = ButtonProps & {
  label: string;
};

const Button: React.FC<ButtonProp> = ({ label, ...props }) => {
  return (
    <MUIButton variant="contained" {...props}>
      {label}
    </MUIButton>
  );
};

export default Button;
