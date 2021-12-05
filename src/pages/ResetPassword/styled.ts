import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FormWrapper = styled(Box)(() => ({
  marginLeft: "70px",
  marginTop: "100px",
  "& #description": {
    marginBottom: "52px",
    marginTop: "16px",
  },

  "& #button": {
    marginTop: "32px",
  },
}));
