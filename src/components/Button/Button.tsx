import styles from "./styles.module.css";

type ButtonProps = {
  label: string;
  variant: "small" | "medium" | "large";
  color: "primary" | "white" | "yellow";
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "small",
  color = "primary",
}) => {
  return (
    <button
      className={`${styles[`button-${variant}-${color}`]} ${
        styles[`button-${color}`]
      }`}
    >
      {label}
    </button>
  );
};
