import { PaletteMode } from "@mui/material";
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#5e50a1",
            dark: "#473a85",
          },
          secondary: {
            main: "#fbb017",
          },
          info: {
            main: "#ffffff",
          },
          text: {
            primary: "#ffffff",
            secondary: "#5e50a1",
            black: "#1f2a36",
          },
          background: {
            default: "rgba(229, 229, 229, 0.2)",
            paper: "#ffffff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#4029ab",
            dark: "#4830b8",
          },
          secondary: {
            main: "#e0a222",
          },
          info: {
            main: "#ffffff",
            dark: "#e0dada",
          },
          background: {
            default: "#0d1117",
            paper: "#161b22",
          },
          text: {
            primary: "#ffffff",
            secondary: "#8171c9",
          },
        }),
  },
});
