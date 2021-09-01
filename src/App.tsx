import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

import { Register } from "./pages/Register/Register";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" render={() => <Home />} exact />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
      </Switch>
    </Router>
  );
};
