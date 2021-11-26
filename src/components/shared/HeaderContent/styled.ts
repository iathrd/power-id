import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  paddingInline: "9.375rem",
  paddingBlock: "16px",
  [theme.breakpoints.down("md")]: {
    paddingInline: "2.25rem",
  },
}));
