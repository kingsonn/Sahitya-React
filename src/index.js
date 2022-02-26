import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "Home.js";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path={'/home'} component={Home} />
      <Route path={'/admin'} component={AdminLayout} />
      <Redirect from={`/`} to="/home" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
