import { Theme } from "@mui/material";

const getComponentThme = (theme: Theme) => ({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Open Sans",
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
              color: theme.palette.fontColor.primary,
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
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Open Sans",
        },
      },
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: "2.75rem",
            fontWeight: "bold",
            lineHeight: "4.375rem",
            color: theme.palette.text.primary,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "2.25rem",
            fontWeight: "600",
            lineHeight: "3.5rem",
            color: theme.palette.text.primary,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: "2rem",
            fontWeight: "600",
            lineHeight: "2.75rem",
            color: theme.palette.text.primary,
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontSize: "1.875rem",
            fontWeight: "600",
            lineHeight: "3.125rem",
            color: theme.palette.text.primary,
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontSize: "1.75rem",
            fontWeight: "bold",
            lineHeight: "1.25rem",
            color: theme.palette.text.primary,
          },
        },
        {
          props: { variant: "h6" },
          style: {
            fontSize: "1.375rem",
            fontWeight: "600",
            color: theme.palette.text.primary,
          },
        },
      ],
    },
  },
});

export default getComponentThme;
