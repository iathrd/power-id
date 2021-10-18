import { Typography, TypographyProps, styled } from "@mui/material";

type TextProps = TypographyProps & {
  newColor: "primary" | "secondary";
};

const TextStyled = styled((props: TextProps) => <Typography {...props} />)(
  ({ theme, newColor }) => `
    color:${theme.palette.fontColor[newColor]}
  `
);

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <TextStyled {...props}>{children}</TextStyled>
);

export default Text;
