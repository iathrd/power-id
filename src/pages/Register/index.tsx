import styles from "./styles.module.css";
import Banner from "@components/Banner";
import { Form, Formik } from "formik";
import InputField from "@components/InputField";
import { validate } from "./validate";
import Button from "@components/Button";
import { Link } from "react-router-dom";
import Typography from "@components/Typography";
import useResponsive from "@hooks/useResponsive";

const Register: React.FC = () => {
  const { isLaptop } = useResponsive();

  const renderField = (
    name: string,
    label: string,
    placeholder: string,
    type = "text"
  ) => {
    return (
      <InputField
        label={label}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    );
  };

  const renderRegisterForm = (): JSX.Element => {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          rePassword: "",
        }}
        onSubmit={() => {
          return;
        }}
        validate={validate}
      >
        {({ isValid, handleSubmit, dirty }) => (
          <Form>
            {renderField("name", "Name", "Masukan nama panjang")}
            {renderField("email", "Email", "Masukan alamat email", "email")}
            {renderField("phoneNumber", "No handphone", "Masukan no handphone")}
            {renderField(
              "password",
              "Password",
              "Masukan kata sandi",
              "password"
            )}
            {renderField(
              "rePassword",
              "Konfirmasi kata sandi",
              "Masukan konfirmasi kata sandi",
              "password"
            )}
            <Button
              color="secondary"
              disabled={!dirty || !isValid}
              fullWidth={true}
              label="Daftar"
              onClick={() => handleSubmit()}
              size="medium"
            />
            <div className={styles.haveAccount}>
              <Typography newcolor="primary" variant="body2">
                Anda sudah punya akun ?{" "}
              </Typography>
              <Link className="text-link" to="/signin">
                <Typography newcolor="yellow" variant="body2">
                  &nbsp;Masuk disini
                </Typography>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div className="parent">
      {!isLaptop ? null : <Banner />}
      <div className={styles.registerForm}>
        <Typography newcolor="primary" variant="h3">
          Halo, Pewpeople
        </Typography>
        <Typography newcolor="grey" variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </Typography>
        {renderRegisterForm()}
      </div>
    </div>
  );
};

export default Register;
