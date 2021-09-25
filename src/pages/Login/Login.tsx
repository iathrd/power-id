import styles from "./styles.module.css";
import { Banner } from "@components/Banner/Banner";
import { Form, Formik } from "formik";
import { InputField } from "@components/InputField/InputField";
import { Button } from "@components/Button/Button";
import useResponsive from "@hooks/useResponsive";
import { validate } from "./validate";
import { Link, useHistory } from "react-router-dom";

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
              <h6>Lupa kata sandi?</h6>
            </div>
            <Button
              color="secondary"
              disabled={!isValid || !dirty}
              fullWidth={true}
              label="Masuk"
              onClick={() => handleSubmit()}
              type="submit"
            />
            <div className={styles.haveAccount}>
              <h6>Anda belum punya akun ? </h6>
              <Link className="text-link" to="/signup">
                <h6>Daftar disini</h6>
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
        <h3>Halo, Pewpeople</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </h5>
        {renderLoginForm()}
      </div>
    </div>
  );
};

export default Login;
