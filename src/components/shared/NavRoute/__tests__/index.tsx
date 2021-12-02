import renderer from "react-test-renderer";
import { ThemeProvider } from "@mui/material";
import Component from "../index";
import pages from "@pages/index";
import { mocks } from "@utils/index";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const themeMock = mocks.getThemeMock();

jest.mock("react-router-dom");

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themeMock}>
        <Router>
          <Switch>
            {Component({
              component: pages.LandingPage,
              exact: true,
              navbarTransparent: true,
              path: "/",
            })}
          </Switch>
        </Router>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
