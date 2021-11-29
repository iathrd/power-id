import renderer from "react-test-renderer";
import Component from "../index";
import { ThemeProvider } from "@mui/material";
import { mocks } from "@utils/index";

const themeMock = mocks.getThemeMock();

it("renders correcly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themeMock}>
        <Component />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
