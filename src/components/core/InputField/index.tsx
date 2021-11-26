import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import Box from "@mui/material/Box";
import { Input, Label, InputControl, ErrorText } from "./styled";

type InputFieldProps = InputHTMLAttributes<HTMLElement> & {
  label?: string;
  name: string;
  fulwidth?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
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

export default InputField;
