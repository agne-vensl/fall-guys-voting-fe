import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from "./components/Logo/Logo";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const Routes = () => {
  return (
    <Router>
      <Logo
        src="https://fallguys.com/_next/image?url=%2Fimages%2Fseason4%2Flogo-desktop.png&w=1024&q=75"
        alt="fall-guys-logo"
      />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
