import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";

function HomeNav() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/home" component={Home} /> */}
        </Switch>
      </div>
    );
}

export default HomeNav;
