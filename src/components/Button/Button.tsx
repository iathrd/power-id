import styles from "./styles.module.css";

type ButtonProps = {
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
}) => {
  if (fullWidth) {
    return (
      <button
        className={`${styles[`button-${variant}-${color}`]} ${
          styles[`button-${color}`]
        } ${styles["button-fullwidth"]}`}
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
      >
        {label}
      </button>
    );
  }
};
