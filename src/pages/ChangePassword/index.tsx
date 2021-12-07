import Box from "@mui/material/Box";
import Typography from "@components/core/Typography";
import Button from "@components/core/Button";
import Lock from "@components/icon/Lock";
import { CardWrapper } from "./styled";
import { IMG } from "@configs/index";

const ChangePassword: React.FC = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      marginY="50px"
    >
      <CardWrapper>
        <img alt="power-id" className="logo" src={IMG.LOGO} />
        <Typography newcolor="black2" variant="h6">
          Request to Reset Your Account Password
        </Typography>
        <Lock />
        <Typography newcolor="grey" variant="subtitle1">
          The following is the button for you to reset the password.
        </Typography>
        <Button color="secondary" label="Change Password" size="small" />
      </CardWrapper>
    </Box>
  );
};

export default ChangePassword;
