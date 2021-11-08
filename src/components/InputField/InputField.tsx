import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import { styled, Box } from "@mui/material";

type InputFieldProps = InputHTMLAttributes<HTMLElement> & {
  label?: string;
  name: string;
  fulwidth?: boolean;
};

type Error = {
  error: {
    error?: string | undefined;
    touched?: boolean;
  };
};

const Input = styled((props: InputFieldProps & Error) => <input {...props} />)(
  ({ theme, error }) => ({
    height: "50px",
    color: theme.palette.fontColor.primary,
    border:
      error.error && error.touched
        ? `1px solid ${theme.palette.error.main}`
        : theme.palette.mode === "light"
        ? "1px solid #e2e5ed"
        : "1px solid #30363d",
    borderRadius: "4px",
    backgroundColor: theme.palette.background.paper,
    paddingInline: "15px",
    "&:hover": {
      border:
        error.error && error.touched
          ? `1px solid ${theme.palette.error.main}`
          : theme.palette.mode === "light"
          ? "1px solid #e2e5ed"
          : "1px solid #30363d",
    },
    "&:focus": {
      border:
        error.error && error.touched
          ? `2px solid ${theme.palette.error.main}`
          : theme.palette.mode === "light"
          ? "2px solid #e2e5ed"
          : "2px solid #30363d",
      outline: "none",
    },
    "&::placeholder": {
      fontFamily: "Open Sans !important",
      color: "#858d96 !important",
      fontSize: "14px !important",
    },
  })
);

const Label = styled("label")(() => ({
  color: "#9EA0A5",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 0 4px 8px",
}));

const InputControl = styled(Box)`
  width: "100%";
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const ErrorText = styled("p")(({ theme }) => ({
  fontSize: "12px",
  fontFamily: "Open Sans",
  color: theme.palette.error.main,
  marginLeft: "7px",
  marginTop: "2px",
}));

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props);
  return (
    <div>
      <InputControl>
        <Label htmlFor={field.name}>{label}</Label>
        <Input
          {...field}
          {...props}
          autoComplete="off"
          error={{ error, touched }}
          id={field.name}
        />
        <Box height="16px">
          {error && touched && <ErrorText>{error}</ErrorText>}
        </Box>
      </InputControl>
    </div>
  );
};
