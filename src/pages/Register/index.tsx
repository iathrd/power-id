import styles from "./styles.module.css";
import Banner from "@components/shared/Banner";
import Typography from "@components/core/Typography";
import useResponsive from "@hooks/useResponsive";
import RegisterForm from "@components/form/RegisterForm";

const Register: React.FC = () => {
  const { isTabletDevice } = useResponsive();

  return (
    <div className="parent">
      {!isTabletDevice && <Banner />}
      <div className={styles.registerForm}>
        <Typography newcolor="primary" variant="h3">
          Halo, Pewpeople
        </Typography>
        <Typography newcolor="grey" variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </Typography>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
