import { styled } from "@mui/material";

export const ProfileForm = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  "& .head": {
    padding: "18px 0 5px 30px",
    borderBottom: "1px solid #C4C4C4",
    marginBottom: "30px",
  },
  "& .form": {
    paddingInline: "30px",
    marginBottom: "50px",
  },
  "& hr": {
    marginBlock: "40px",
    border: "1px solid #E2E5ED",
  },
}));
