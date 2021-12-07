import { validateInput } from "@utils/validateInput";

interface LoginForm {
  email: string | undefined;
}

export const validate = (values: LoginForm) => {
  const { email } = values;

  const errors = {
    email: validateInput(email, "email"),
  };

  return validateInput(errors, "errors");
};
