import { useState, useMemo } from "react";
import { ColorModeContext } from "@utils/context";
import { getDesignToken, componentsTheme } from "@utils/index";
import App from "./App";
import {
  PaletteMode,
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

const Root: React.FC = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  let theme = useMemo(() => createTheme(getDesignToken(mode)), [mode]);
  theme = createTheme(theme, componentsTheme(theme));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <div style={{}} />
          <App />
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
};

export default Root;
