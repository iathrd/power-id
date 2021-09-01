import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register } from "./pages/Register/Register";
export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Home />} exact />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
      </Switch>
    </Router>
  );
};
