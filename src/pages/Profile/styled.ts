import { styled } from "@mui/material/styles";

export const BlueBack = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  width: "100%",
  height: "361px",
  zIndex: -1,
}));

export const Content = styled("main")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingInline: "9.375rem",
  paddingTop: "70px",
  paddingBottom: "180px",
}));

export const UserInfo = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "357px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  boxShadow: "0px 8px 16px rgba(197, 197, 197, 0.25)",
  padding: "30px 30px 82px 30px",
  "& .textContent": {
    textAlign: "start",
  },
  "& .avatar": {
    alignSelf: "center",
    marginBottom: "13px",
  },
  "& .location": {
    marginBlock: "13px",
  },
  "& .location > svg": {
    marginRight: "11px",
  },
  "& .description": {
    marginTop: "18px",
    marginBottom: "38px",
  },
  "& .description > h6": {
    textAlign: "start",
    wordBreak: "break-all",
  },
  "& .skill": {
    marginTop: "36px",
    marginBottom: "60px",
  },
}));
