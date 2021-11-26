import Button from "@components/core/Button";
import Flex from "@components/core/Flex";
import InputField from "@components/core/InputField";
import Typography from "@components/core/Typography";
import { validate } from "./validate";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

const RegisterForm: React.FC = () => {
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
          <Flex marginTop="28px">
            <Typography newcolor="primary" variant="body2">
              Anda sudah punya akun ?{" "}
            </Typography>
            <Link className="text-link" to="/signin">
              <Typography newcolor="yellow" variant="body2">
                &nbsp;Masuk disini
              </Typography>
            </Link>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
