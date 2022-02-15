import { styled } from "@mui/material";

export const SkillWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  "& div": {
    width: "100%",
  },
  "& button": {
    marginBottom: "10px",
    marginLeft: "30px",
    padding: "0",
  },
}));
