import "./App.css";
import "@fontsource/open-sans";
import ScrollToTop from "@components/core/ScrollToTop";
import NavRoute from "@components/shared/NavRoute";
import pages from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route component={pages.Login} path="/signin" />
        <Route component={pages.Register} path="/signup" />
        <NavRoute
          component={pages.LandingPage}
          exact
          navbarTransparent={true}
          path="/"
        />
        <NavRoute component={pages.Home} exact path="/home" />
      </Switch>
    </Router>
  );
};

export default App;
