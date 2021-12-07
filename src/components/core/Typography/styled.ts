import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

type NewColor =
  | "primary"
  | "secondary"
  | "grey"
  | "lightGrey"
  | "yellow"
  | "black2";

export const TextStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "newcolor",
})<{ newcolor: NewColor }>(({ theme, newcolor }) => ({
  color: theme.palette.fontColor[newcolor],
}));
