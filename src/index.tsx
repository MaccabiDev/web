import * as React from "react";
import * as ReactDOM from "react-dom";

import indexRoutes from "./routes/index";
import { Route, Switch, HashRouter } from "react-router-dom";

import "./assets/scss/style.css";

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
