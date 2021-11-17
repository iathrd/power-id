import renderer from "react-test-renderer";
import { ThemeProvider } from "@mui/material";
import Component from "../index";
import { mocks } from "@utils/index";

const themeMock = mocks.getThemeMock();

describe("<Home/>", () => {
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
});
