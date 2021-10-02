declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.module.css";

declare module "@mui/material/styles" {
  interface PaletteColor {
    white?: string;
  }

  interface SimplePaletteColorOptions {
    white?: string;
  }

  interface Theme {
    text: {
      primary: string;
      secondary: string;
      black: string;
    };
  }

  interface ThemeOptions {
    text: {
      primary?: string;
      secondary?: string;
      black?: string;
    };
  }
}
