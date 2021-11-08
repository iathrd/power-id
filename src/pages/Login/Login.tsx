import styles from "./styles.module.css";
import { Banner } from "@components/Banner/Banner";
import { Form, Formik } from "formik";
import { InputField } from "@components/InputField/InputField";
import { Button } from "@components/Button/Button";
import useResponsive from "@hooks/useResponsive";
import { validate } from "./validate";
import { Link, useHistory } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@components/Typography/Typography";

const Login: React.FC = () => {
  const history = useHistory();

  const renderField = (
    label: string,
    name: string,
    placeholder: string,
    type = "text"
  ): JSX.Element => {
    return (
      <InputField
        label={label}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    );
  };

  const renderLoginForm = (): JSX.Element => {
    const handleSubmit = (): void => {
      history.push("/home", { isLogin: true });
    };

    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          handleSubmit();
        }}
        validate={validate}
      >
        {({ isValid, handleSubmit, dirty }) => (
          <Form>
            {renderField("Email", "email", "Masukan alamat email", "email")}
            {renderField(
              "Password",
              "password",
              "Masukan kata sandi",
              "password"
            )}
            <div className={styles.forgotPassword}>
              <Typography newColor="primary" variant="body2">
                Lupa kata sandi?
              </Typography>
            </div>
            <Button
              color="secondary"
              disabled={!isValid || !dirty}
              fullWidth={true}
              label="Masuk"
              onClick={() => handleSubmit()}
              size="medium"
              type="submit"
            />
            <div className={styles.haveAccount}>
              <Typography newColor="primary" variant="body2">
                Anda belum punya akun ?{" "}
              </Typography>
              <Link className="text-link" to="/signup">
                <Typography newColor="yellow" variant="body2">
                  &nbsp;Daftar disini
                </Typography>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  const { isLaptop } = useResponsive();

  return (
    <div className="parent">
      {!isLaptop ? null : <Banner />}

      <div className={styles.loginForm}>
        <Typography newColor="primary" variant="h3">
          Halo, Pewpeople
        </Typography>
        <Box marginBottom="52px">
          <Typography newColor="grey" variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </Typography>
        </Box>
        {renderLoginForm()}
      </div>
    </div>
  );
};

export default Login;
