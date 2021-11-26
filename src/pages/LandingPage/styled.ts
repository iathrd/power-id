import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

type FillProps = "primary" | "secondary";

export const Circle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fillColor",
})<{ fillColor: FillProps }>(({ theme, fillColor }) => ({
  height: "24px",
  width: "24px",
  borderRadius: "50%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette[fillColor].main,
}));
