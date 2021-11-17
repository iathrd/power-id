import { getDesignToken, componentsTheme } from "@utils/index";
import { createTheme, Theme } from "@mui/material";

const getThemeMock = (): Theme => {
  let themeMock = createTheme(getDesignToken("light"));
  themeMock = createTheme(themeMock, componentsTheme(themeMock));
  return themeMock;
};

const jestMocks = {
  getThemeMock,
};

export default jestMocks;
