import { styled, Box } from "@mui/material";

export const Nav = styled(Box)(({ theme }) => ({
  height: "6.25rem",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: "9.375rem",
  position: "sticky",
  top: 0,
  zIndex: 999,
  [theme.breakpoints.down("md")]: {
    paddingInline: "2.25rem",
  },
}));

export const Avatar = styled("img")`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 50px;
`;
