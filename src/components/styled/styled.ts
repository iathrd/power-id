import { styled } from "@mui/material/styles";

export const Content = styled("main")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  paddingInline: "9.375rem",
  paddingTop: "70px",
  paddingBottom: "180px",
  [theme.breakpoints.down("md")]: {
    paddingInline: "2.25rem",
  },
}));

export const BlueBack = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  width: "100%",
  height: "361px",
  zIndex: -1,
}));
