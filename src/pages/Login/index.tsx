import styles from "./styles.module.css";
import Banner from "@components/shared/Banner";
import Box from "@mui/material/Box";
import Typography from "@components/core/Typography";
import LoginForm from "@components/form/LoginForm";
import useResponsive from "@hooks/useResponsive";

const Login: React.FC = () => {
  const { isTabletDevice } = useResponsive();

  return (
    <div className="parent">
      {!isTabletDevice && <Banner />}

      <div className={styles.loginForm}>
        <Typography newcolor="primary" variant="h3">
          Halo, Pewpeople
        </Typography>
        <Box marginBottom="52px">
          <Typography newcolor="grey" variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </Typography>
        </Box>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
