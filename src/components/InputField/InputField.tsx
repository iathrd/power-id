import styles from "./styles.css";
import { useField } from "formik";
import { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLElement> & {
  label: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props);
  return (
    <div>
      <div className={styles.input}>
        <label htmlFor={field.name}>{label}</label>
        <input
          className={error && touched ? styles.errorInput : ""}
          {...field}
          {...props}
          id={field.name}
        />
        <div>{error && touched && <p>{error}</p>}</div>
      </div>
    </div>
  );
};
