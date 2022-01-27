import { styled } from "@mui/material";

export const Footer = styled("footer")(({ theme }) => ({
  height: "25.063rem",
  width: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : theme.palette.background.paper,
  padding: "4.375rem 9.375rem 2.625rem 9.375rem",
  [theme.breakpoints.down("md")]: {
    paddingInline: "2.25rem",
  },

  "& .logo": {
    marginBottom: "1.875rem",
  },

  "& .logo > img": {
    height: "50px",
    width: "178px",
  },

  "& .description": {
    marginBottom: "4.188rem",
    width: "60%",
  },
}));
