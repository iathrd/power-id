import { styled, Box } from "@mui/material";
import { keyframes } from "@mui/styled-engine";

const slide = keyframes`
from {
    left: -200px;
  }

  to {
    left: 100%;
  }
`;

export const Load = styled(Box)(({ theme }) => ({
  width: "30px",
  height: "4px",
  position: "relative",
  background: `linear-gradient(
      to right,
      ${theme.palette.mode === "dark" ? "transparent" : "#705cd6"},
      ${theme.palette.mode === "dark" ? "#705cd6" : "rgba(255,255,255,0.8)"},
      ${theme.palette.mode === "dark" ? "#705cd6" : "#705cd6"}
    )`,
  animation: `${slide} 9s infinite`,
  overflow: "hidden",
}));
