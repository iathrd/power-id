import { styled } from "@mui/material/styles";

export const CardWrapper = styled("div")(({ theme }) => ({
  width: "600px",
  height: "650px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  borderBottom: `15px solid ${theme.palette.primary.main}`,
  padding: "46px 0 0 0",
  ...(theme.palette.mode === "light"
    ? {
        boxShadow: "0px 1px 20px rgba(197, 197, 197, 0.25)",
      }
    : { border: "none" }),
  "& .logo": {
    height: "49px",
    marginBottom: "57px",
  },
  "& svg": {
    marginTop: "34px",
    marginBottom: "39px",
  },
  "& button": {
    marginTop: "20px",
  },
}));
