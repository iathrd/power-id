import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Register } from "./pages/Register/Register";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { NavRoute } from "./components/NavRoute/NavRoute";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <NavRoute exact component={LandingPage} path="/" />
        <NavRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};
