import { validateInput } from "../../utils/validateInput";

interface LoginForm {
  email: string | undefined;
  password: string | undefined;
}

export const validate = (values: LoginForm) => {
  const { email, password } = values;

  const errors = {
    email: validateInput(email, "email"),
    password: validateInput(password, "password"),
  };

  return validateInput(errors, "errors");
};
