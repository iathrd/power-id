import renderer from "react-test-renderer";
import Component from "../index";

it("renders corecly", () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
