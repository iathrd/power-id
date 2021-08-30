import styles from "./styles.module.css";
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
        <input {...field} {...props} id={field.name} />
      </div>
      <div>{error && touched && <h5>{error}</h5>}</div>
    </div>
  );
};