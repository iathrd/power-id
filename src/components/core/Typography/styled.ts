import { styled, Typography } from "@mui/material";

type NewColor = "primary" | "secondary" | "grey" | "lightGrey" | "yellow";

export const TextStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "newcolor",
})<{ newcolor: NewColor }>(({ theme, newcolor }) => ({
  color: theme.palette.fontColor[newcolor],
}));
