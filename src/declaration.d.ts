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

  export interface Palette {
    fontColor: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      grey: React.CSSProperties["color"];
      lightGrey: React.CSSProperties["color"];
      yellow: React.CSSProperties["color"];
    };
    content: {
      main: React.CSSProperties["color"];
      border: {
        lightGrey: React.CSSProperties["color"];
      };
    };
  }
}
