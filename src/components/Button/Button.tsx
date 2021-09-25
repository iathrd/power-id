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
    <MUIButton size="large" variant="contained" {...props}>
      {label}
    </MUIButton>
  );

  // if (fullWidth) {
  //   return (
  //     <button
  //       className={`${styles[`button-${variant}-${color}`]} ${
  //         styles[`button-${color}`]
  //       } ${styles["button-fullwidth"]}`}
  //       {...props}
  //     >
  //       {label}
  //     </button>
  //   );
  // } else {
  //   return (
  //     <button
  //       className={`${styles[`button-${variant}-${color}`]} ${
  //         styles[`button-${color}`]
  //       }`}
  //       {...props}
  //     >
  //       {label}
  //     </button>
  //   );
  // }
};
