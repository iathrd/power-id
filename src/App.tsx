import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import NavRoute from "@components/NavRoute/NavRoute";
import "@fontsource/open-sans";

const Register = lazy(() => import("@pages/Register/Register"));
const LandingPage = lazy(() => import("@pages/LandingPage/LandingPage"));
const Login = lazy(() => import("@pages/Login/Login"));
const Home = lazy(() => import("@pages/Home/Home"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/signin" render={() => <Login />} />
          <Route path="/signup" render={() => <Register />} />
          <NavRoute
            component={LandingPage}
            exact
            navbarTransparent={true}
            path="/"
          />
          <NavRoute component={Home} exact path="/home" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
