// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateInput = (values: any, rules: string) => {
  if (rules === "email") {
    if (!values) {
      return "Email is required";
    } else if (values) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (values.match(pattern) === null) {
        return "Invalid email adress";
      }
      return;
    }
  } else if (rules === "password") {
    if (!values) {
      return "Password is required";
    } else {
      if (values.length < 8) {
        return "Your password must be at least 8 characters";
      }
      if (values.search(/[a-z]/i) < 0) {
        return "Your password must contain at least one letter.";
      }
      if (values.search(/[0-9]/) < 0) {
        return "Your password must contain at least one digit.";
      }
      return;
    }
  } else if (rules === "errors") {
    return Object.entries(values).reduce(
      (a, [k, v]) => (v ? ((a[k] = v), a) : a),
      {}
    );
  }

  return;
};
