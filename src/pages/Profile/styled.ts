import MuiTabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

export const BlueBack = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  width: "100%",
  height: "361px",
  zIndex: -1,
}));

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

export const Experient = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  marginLeft: "30px",
  width: "100%",
  padding: "18px 30px 30px 30px",
  position: "relative",
}));

export const Tabs = styled(MuiTabs)(({ theme }) => ({
  "& button": {
    fontFamily: "Open Sans",
    fontSize: "22px",
    color: theme.palette.fontColor.primary,
    fontWeight: "600",
    textTransform: "none",
    padding: "0",
    paddingBottom: "10px",
    marginRight: "30px",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.main,
    height: "5px",
    borderRadius: "10px",
  },
}));

export const Portofolio = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "18px",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& > div > img": {
    width: "170px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "8px",
  },
}));

export const Experients = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  "& > div": {
    display: "flex",
    flexDirection: "row",
    marginBottom: "40px",
  },
  "& > div > img": {
    width: "74px",
    height: "74px",
    objectFit: "cover",
    marginRight: "32px",
    borderRadius: "4px",
  },

  "& > div div > p": {
    marginRight: "12px",
  },

  "& > div div": {
    marginBottom: "16px",
  },
}));
