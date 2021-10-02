import { Typography, TypographyProps } from "@mui/material";

type TextProps = TypographyProps & {
  color: "black" | "grey";
};

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default Text;
