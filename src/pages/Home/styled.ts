import Box from "@mui/material/Box";
import CustomButton from "@components/core/Button";
import { styled } from "@mui/material/styles";

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

export const CardWrapper = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  flexWrap: "wrap",
  gap: "40px",
  width: "100%",
  ...(theme.palette.mode === "light"
    ? {
        boxShadow: "0px 1px 20px rgba(197, 197, 197, 0.25)",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "8px",
      }
    : { border: "none" }),
  marginTop: "50px",
  padding: "21px 0 38px 0",
}));

export const ItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "last",
})<{ last?: boolean }>(({ theme, last = false }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  ...(theme.palette.mode === "dark"
    ? { borderBottom: "1px solid #30363d" }
    : { borderBottom: "2px solid #F2F3F4" }),
  ...(last
    ? { padding: "0 77px 0 20px", border: "none !important" }
    : { padding: "0 77px 38px 20px" }),
}));

export const Skill = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "28px",
  border: "1px solid #FBB017",
  backgroundColor: "rgba(251, 176, 23, 0.6)",
  borderRadius: "4px",
  fontSize: "0.75px",
  color: theme.palette.fontColor.secondary,
  paddingInline: "21px",
  marginRight: "10px",
}));

export const Button = styled(CustomButton)(() => ({
  height: "54px",
  width: "148px",
}));
