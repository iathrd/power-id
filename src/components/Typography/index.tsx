import { TypographyProps } from "@mui/material";
import { TextStyled } from "./styled";

type TextProps = TypographyProps & {
  newcolor: "primary" | "secondary" | "grey" | "lightGrey" | "yellow";
};

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <TextStyled {...props}>{children}</TextStyled>
);

export default Text;
