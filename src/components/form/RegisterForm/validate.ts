import { validateInput } from "@utils/validateInput";

type RegisterForm = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  rePassword: string;
};

export const validate = (values: RegisterForm) => {
  const { name, email, phoneNumber, password, rePassword } = values;

  const errors = {
    name: validateInput({ label: "Name", value: name }, "required"),
    email: validateInput(email, "email"),
    phoneNumber: validateInput(
      { label: "Phone number", value: phoneNumber },
      "required"
    ),
    password: validateInput(password, "password"),
    rePassword: validateInput(
      {
        value: rePassword,
        matchValue: password,
        message: "Password is not match",
      },
      "matchValue"
    ),
  };

  return validateInput(errors, "errors");
};
