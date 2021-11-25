import { styled, Box } from "@mui/material";

type Error = {
  error?: string | undefined;
  touched?: boolean;
};

export const Input = styled("input", {
  shouldForwardProp: (prop) => prop !== "error",
})<{ error: Error }>(({ theme, error }) => ({
  height: "50px",
  color: theme.palette.fontColor.primary,
  border:
    error.error && error.touched
      ? `1px solid ${theme.palette.error.main}`
      : theme.palette.mode === "light"
      ? "1px solid #e2e5ed"
      : "1px solid #30363d",
  borderRadius: "4px",
  backgroundColor: theme.palette.background.paper,
  paddingInline: "15px",
  "&:hover": {
    border:
      error.error && error.touched
        ? `1px solid ${theme.palette.error.main}`
        : theme.palette.mode === "light"
        ? "1px solid #e2e5ed"
        : "1px solid #30363d",
  },
  "&:focus": {
    border:
      error.error && error.touched
        ? `2px solid ${theme.palette.error.main}`
        : theme.palette.mode === "light"
        ? "2px solid #e2e5ed"
        : "2px solid #30363d",
    outline: "none",
  },
  "&::placeholder": {
    fontFamily: "Open Sans !important",
    color: "#858d96 !important",
    fontSize: "14px !important",
  },
}));

export const Label = styled("label")(() => ({
  color: "#9EA0A5",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 0 4px 8px",
}));

export const InputControl = styled(Box)`
  width: "100%";
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const ErrorText = styled("p")(({ theme }) => ({
  fontSize: "12px",
  fontFamily: "Open Sans",
  color: theme.palette.error.main,
  marginLeft: "7px",
  marginTop: "2px",
}));
