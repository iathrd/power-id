import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  variant: "small" | "medium" | "large";
  color: "primary" | "white" | "yellow";
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "small",
  color = "primary",
  fullWidth,
  ...props
}) => {
  if (fullWidth) {
    return (
      <button
        className={`${styles[`button-${variant}-${color}`]} ${
          styles[`button-${color}`]
        } ${styles["button-fullwidth"]}`}
        {...props}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className={`${styles[`button-${variant}-${color}`]} ${
          styles[`button-${color}`]
        }`}
        {...props}
      >
        {label}
      </button>
    );
  }
};
