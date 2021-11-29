import renderer from "react-test-renderer";
import { ThemeProvider } from "@mui/material";
import Component from "../index";
import { mocks } from "@utils/index";

let themeMock = mocks.getThemeMock();

it("renders correctly light mode", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themeMock}>
        <Component />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly light mode", () => {
  themeMock = mocks.getThemeMock("dark");
  const tree = renderer
    .create(
      <ThemeProvider theme={themeMock}>
        <Component />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
