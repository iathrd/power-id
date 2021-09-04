import styles from "./styles.module.css";
import { Banner } from "../../components/Banner/Banner";
import { Form, Formik } from "formik";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "../../components/Button/Button";
import useResponsive from "../../hooks/useResponsive";
import { validate } from "./validate";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
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
    return (
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{ email: "", password: "" }}
        validate={validate}
        isInitialValid={false}
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
              type="submit"
              disabled={!isValid || !dirty}
              onClick={() => handleSubmit()}
              label="Masuk"
              variant="medium"
              color="yellow"
              fullWidth={true}
            />
            <div className={styles.haveAccount}>
              <h6>Anda belum punya akun ? </h6>
              <Link className="text-link" to="/register">
                <h6>Daftar disini</h6>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  const { isTablet } = useResponsive();

  return (
    <div className="parent">
      {isTablet ? null : <Banner />}

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
