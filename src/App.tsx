import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop";
import NavRoute from "@components/NavRoute/NavRoute";
import pages from "./pages";
import "@fontsource/open-sans";

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
