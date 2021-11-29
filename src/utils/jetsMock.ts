import { getDesignToken, componentsTheme } from "@utils/index";
import { createTheme, Theme, PaletteMode } from "@mui/material";

const getThemeMock = (mode: PaletteMode = "light"): Theme => {
  let themeMock = createTheme(getDesignToken(mode));
  themeMock = createTheme(themeMock, componentsTheme(themeMock));
  return themeMock;
};

const jestMocks = {
  getThemeMock,
};

export default jestMocks;
