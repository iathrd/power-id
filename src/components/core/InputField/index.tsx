import { useField } from "formik";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import Box from "@mui/material/Box";
import { Input, InputControl, ErrorText, TextArea } from "./styled";
import { FormLabel } from "@components/styled/styled";

type InputFieldProps = InputHTMLAttributes<HTMLElement> &
  TextareaHTMLAttributes<HTMLElement> & {
    label?: string;
    name: string;
    fulwidth?: boolean;
    variant?: "text" | "textarea" | "select";
  };

const InputField: React.FC<InputFieldProps> = ({
  label,
  variant = "text",
  ...props
}) => {
  const [field, { error, touched }] = useField(props);
  return (
    <div>
      <InputControl>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        {variant === "text" && (
          <Input
            {...field}
            {...props}
            autoComplete="off"
            error={{ error, touched }}
            id={field.name}
          />
        )}
        {variant === "textarea" && (
          <TextArea
            {...field}
            {...props}
            autoComplete="off"
            error={{ error, touched }}
            id={field.name}
          />
        )}
        <Box height="16px">
          {error && touched && <ErrorText>{error}</ErrorText>}
        </Box>
      </InputControl>
    </div>
  );
};

export default InputField;
