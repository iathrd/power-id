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
            pink: "#a8329b",
          },
          background: {
            default: "rgba(229, 229, 229, 0.2)",
            paper: "#ffffff",
            coba: "#ffffff",
          },

          fontColor: {
            primary: "#1F2A36",
            secondary: "#FFFFFF",
            grey: "#46505C",
            lightGrey: "#9EA0A5",
          },
          content: {
            main: "#E2E5ED",
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
            coba: "#ffffff",
          },
          text: {
            primary: "#ffffff",
            secondary: "#8171c9",
            pink: "#1f2a36",
          },
          fontColor: {
            primary: "#f0f6fc",
            secondary: "#f0f6fc",
            grey: "#8b949e",
            lightGrey: "#ced6de",
          },
          content: {
            main: "#161b22",
          },
        }),
  },
});
