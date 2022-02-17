import { Theme } from "@mui/material";

const getComponentThme = (theme: Theme) => ({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Open Sans",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Open Sans",
          minWidth: "5.438rem",
          paddingLeft: "1.875rem",
          paddingRight: "1.875rem",
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
        {
          props: { color: "secondary" },
          style: {
            "&:disabled,&[disabled]": {
              color: theme.palette.fontColor.secondary,
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            color: theme.palette.secondary.main,
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
            [theme.breakpoints.down("md")]: {
              fontSize: "2rem",
              lineHeight: "3rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.8rem",
              lineHeight: "2.375rem",
            },
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "2.25rem",
            fontWeight: "600",
            lineHeight: "3.5rem",
            [theme.breakpoints.down("md")]: {
              fontSize: "1.7rem",
              lineHeight: "2.5rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.5rem",
              lineHeight: "2.375rem",
            },
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
        {
          props: { variant: "body1" },
          style: {
            fontSize: "1.125rem",
            fontWeight: "normal",
            [theme.breakpoints.down("md")]: {
              fontSize: "1rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1rem",
            },
          },
        },
        {
          props: { variant: "body2" },
          style: {
            fontSize: "1rem",
            fontWeight: "normal",
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            fontSize: "0.875rem",
            fontWeight: "normal",
          },
        },
        {
          props: { variant: "subtitle2" },
          style: {
            fontSize: "0.75rem",
            fontWeight: "normal",
          },
        },
      ],
    },
    MuiPagination: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Open Sans",
        },
      },
      variants: [
        {
          props: { size: "large" },
          style: {
            ...(theme.palette.mode === "light" && {
              "& li > div": {
                color: theme.palette.fontColor.primary,
              },
            }),
            "& button": {
              ...(theme.palette.mode === "light"
                ? { border: "1px solid #E2E5ED" }
                : { border: "1px solid #30363d" }),
              width: "57px",
              height: "58px",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Open Sans",
              background: theme.palette.background.paper,
              color: "#9EA0A5",
            },
          },
        },
      ],
    },
  },
});

export default getComponentThme;
