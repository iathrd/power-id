import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Label = styled("label")(() => ({
  color: "#9EA0A5",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 0 4px 8px",
}));

export const RadioLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
    color: theme.palette.fontColor.primary,
  },
}));

export const PortofolioField = styled("div")(() => ({
  height: "500px",
  width: "100%",
  marginTop: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px dashed #9EA0A5",
  borderRadius: "8px",
  "& svg:first-child": {
    marginBottom: "38px",
  },
  "& h6:last-child": {
    marginTop: "12px",
  },
}));
