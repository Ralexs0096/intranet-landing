import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing" component={App} />
      <Redirect from="/" to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
