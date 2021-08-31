import { validateInput } from "../../utils/validateInput";

interface LoginForm {
  email: string;
  password: string;
}

export const validate = (values: LoginForm) => {
  const { email, password } = values;

  const errors = {
    email: validateInput(email, "email"),
    password: validateInput(password, "password"),
  };

  return errors;
};
