import styles from "./styles.module.css";
import { Banner } from "@components/Banner/Banner";
import { Form, Formik } from "formik";
import { InputField } from "@components/InputField/InputField";
import { validate } from "./validate";
import { Button } from "@components/Button/Button";
import { Link } from "react-router-dom";

export const Register: React.FC = () => {
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
          console.log("OKOKOK");
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
              color="yellow"
              disabled={!dirty || !isValid}
              fullWidth={true}
              label="Daftar"
              onClick={() => handleSubmit()}
              variant="medium"
            />
            <div className={styles.haveAccount}>
              <h6>Anda sudah punya akun ? </h6>
              <Link className="text-link" to="/signin">
                <h6>Masuk disini</h6>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div className="parent">
      <Banner />
      <div className={styles.registerForm}>
        <h3>Halo, Pewpeople</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </h5>
        {renderRegisterForm()}
      </div>
    </div>
  );
};
