import { Theme } from "@mui/material";

const getComponentThme = (theme: Theme) => ({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          minWidth: "5.438rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: theme.palette.text.primary,
            "&:disabled": {
              backgroundColor: theme.palette.secondary.main,
              opacity: "60%",
              color: theme.palette.text.primary,
            },
          },
        },
        {
          props: { variant: "contained", color: "info" },
          style: {
            color: theme.palette.text.secondary,
            "&:disabled": {
              backgroundColor: theme.palette.secondary.main,
              opacity: "60%",
              color: theme.palette.text.secondary,
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            minHeight: "2.75rem",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            minHeight: "3.125rem",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
          },
        },
        {
          props: { size: "large" },
          style: {
            minHeight: "3.75rem",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
          },
        },
      ],
    },
  },
});

export default getComponentThme;
