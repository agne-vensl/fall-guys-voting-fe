import { BrowserRouter as Router, Switch } from "react-router-dom";

import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AnonRoute from "./components/AnonRoute/AnonRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={<Dashboard />} />
        <AnonRoute path="/register" component={<Register />} />
        <AnonRoute path="/login" component={<Login />} />
        <PrivateRoute path="*" component={<Dashboard />} />
      </Switch>
    </Router>
  );
};

export default Routes;
