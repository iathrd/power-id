import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider, createTheme } from "@mui/material";
import Component from "../Banner";
import { getDesignToken, componentsTheme } from "@utils/index";

let themeMock = createTheme(getDesignToken("light"));
themeMock = createTheme(themeMock, componentsTheme(themeMock));

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themeMock}>
        <Component />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
