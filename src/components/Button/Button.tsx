import { styled, ButtonProps } from "@mui/material";
import MuButton from "@mui/material/Button";

type ButtonProp = ButtonProps & {
  label: string;
};

const MUIButton = styled(MuButton)`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  box-shadow: none;
  text-decoration: none;
  text-transform: capitalize;
`;
export const Button: React.FC<ButtonProp> = ({ label, ...props }) => {
  return (
    <MUIButton variant="contained" {...props}>
      {label}
    </MUIButton>
  );
};
