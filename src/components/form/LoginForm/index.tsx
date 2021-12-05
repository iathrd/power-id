import Button from "@components/core/Button";
import Flex from "@components/core/Flex";
import InputField from "@components/core/InputField";
import Typography from "@components/core/Typography";
import Box from "@mui/material/Box";
import { validate } from "./validate";
import { Formik, Form } from "formik";
import { useHistory, Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (): void => {
    history.push("/home", { isLogin: true });
  };

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
          <Box marginBottom="28px" marginTop="8px" textAlign="end">
            <Link className="text-link" to="/reset-password">
              <Typography newcolor="primary" variant="body2">
                Lupa kata sandi?
              </Typography>
            </Link>
          </Box>
          <Button
            color="secondary"
            disabled={!isValid || !dirty}
            fullWidth
            label="Masuk"
            onClick={() => handleSubmit()}
            size="medium"
            type="submit"
          />
          <Flex marginTop="28px">
            <Typography newcolor="primary" variant="body2">
              Anda belum punya akun ?{" "}
            </Typography>
            <Link className="text-link" to="/signup">
              <Typography newcolor="yellow" variant="body2">
                &nbsp;Daftar disini
              </Typography>
            </Link>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
