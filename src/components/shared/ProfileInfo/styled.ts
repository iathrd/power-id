import { styled } from "@mui/material/styles";

export const UserInfo = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "357px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  ...(theme.palette.mode === "light" && {
    boxShadow: "0px 8px 16px rgba(197, 197, 197, 0.25)",
  }),
  padding: "30px 30px 82px 30px",
  "& .textContent": {
    textAlign: "start",
  },
  "& .avatar": {
    alignSelf: "center",
    marginBottom: "13px",
    textAlign: "center",
  },
  "& .avatar > .edit": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "25px",
    marginBottom: "39px",
    justifyContent: "center",
  },
  "& .avatar > .edit svg": {
    marginRight: "6px",
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

  "& .userBtn": {
    marginTop: "53px",
  },
}));
