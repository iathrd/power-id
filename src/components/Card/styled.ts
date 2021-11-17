import { styled, Box } from "@mui/material";

export const CardWrapper = styled(Box)(({ theme }) => ({
  width: "339px",
  height: "437px",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  ...(theme.palette.mode === "dark"
    ? {
        border: "1px solid #30363d",
      }
    : {
        boxShadow: "0px 8px 16px rgba(197, 197, 197, 0.25)",
      }),
  marginRight: "28px",
  padding: "26px 36px",
}));

export const Image = styled("img")`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;
