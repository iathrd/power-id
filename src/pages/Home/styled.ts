import { Box, styled } from "@mui/material";

export const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: "50px 150px 70px 150px",
  [theme.breakpoints.only("md")]: {
    padding: "50px 100px 70px 100px",
  },
  [theme.breakpoints.only("sm")]: {
    padding: "50px 50px 70px 50px",
  },
  [theme.breakpoints.only("xs")]: {
    padding: "50px 20px 70px 20px",
  },
}));
