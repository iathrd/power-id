// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateInput = (values: any, rules: string) => {
  if (rules === "email") {
    if (!values) {
      return "Required";
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
      return "Required";
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
  } else if (rules === "required") {
    const { value } = values;

    if (!value) {
      return `Required`;
    }
  } else if (rules === "matchValue") {
    const { value, matchValue, message } = values;

    if (value !== matchValue) {
      if (message) {
        return message;
      } else {
        return "Value is not match";
      }
    }
  }

  return;
};
