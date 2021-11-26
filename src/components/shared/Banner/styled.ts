import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BannerImage = styled("img")`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(94, 80, 161, 0.7)"
      : "rgba(64,41,171, 0.7)",
  width: "100%",
  position: "absolute",
  height: "100%",
}));
