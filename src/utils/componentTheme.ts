import { Theme } from "@mui/material";

const getComponentThme = (theme: Theme) => ({
  components: {
    MuiButton: {
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
      ],
    },
  },
});

export default getComponentThme;
