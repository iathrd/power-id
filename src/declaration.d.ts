declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.module.css";
import "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface PaletteColor {
    white?: string;
  }

  interface SimplePaletteColorOptions {
    white?: string;
  }

  export interface Theme {
    fontColor: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      grey: React.CSSProperties["color"];
      lightGrey: React.CSSProperties["color"];
    };
  }

  export interface Palette {
    fontColor: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      grey: React.CSSProperties["color"];
      lightGrey: React.CSSProperties["color"];
    };
    content: {
      main: React.CSSProperties["color"];
    };
  }

  export interface ThemeOptions {
    fontColor: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      grey: React.CSSProperties["color"];
      lightGrey: React.CSSProperties["color"];
    };
    content: {
      main: React.CSSProperties["color"];
    };
  }
}
