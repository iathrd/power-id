import Box from "@mui/material/Box";
import Button from "@components/core/Button";
import { styled } from "@mui/material/styles";

export const SearchInput = styled("input")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  height: "70px",
  outline: "none",
  paddingInline: "20px",
  color: theme.palette.fontColor.primary,
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 1px 20px rgba(197, 197, 197, 0.25)"
      : "none",
  border: theme.palette.mode === "dark" ? "1px solid #30363d" : "none",
  "&::placeholder": {
    fontFamily: "Open Sans !important",
    color: "#9EA0A5 !important",
    fontSize: "14px !important",
  },
}));

export const Action = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
  flexDirection: "row",
  position: "absolute",
  width: "33%",
  top: "50%",
  right: "17%",
  transform: "translate(50%, -50%)",
  paddingBlock: "8px",
  paddingRight: "8px",
}));

export const Filter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: "30px",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  paddingLeft: "25px",
  borderLeft: `1px solid ${theme.palette.content.border.lightGrey}`,
}));

export const SearchButton = styled(Button)`
  height: 54px;
  width: 121px;
  font-size: 16px;
  font-weight: 600;
`;
