import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

type Content = "left" | "right";

export const GreyBox = styled(Box)(({ theme }) => ({
  height: "auto",
  width: "100%",
  position: "absolute",
  transform: "rotate(-15.79deg)",
  backgroundColor: theme.palette.content.main,
}));

export const ChildBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "content",
})<{ content: Content }>(({ theme, content }) => ({
  width: "100%",
  height: "auto",
  position: "absolute",
  backgroundColor: theme.palette.content.main,
  transform: content === "right" ? "rotate(12.57deg)" : "rotate(-12.92deg)",
}));

export const Image = styled("img")`
  position: absolute;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
