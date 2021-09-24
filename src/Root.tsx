import { useState, useMemo } from "react";
import { ColorModeContext } from "@utils/context";
import { getDesignTokens } from "@utils/appTheme";
import App from "./App";
import { PaletteMode } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

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
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
};

export default Root;
