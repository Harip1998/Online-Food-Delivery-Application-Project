import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Login from "../homePage/Login";
import Cart from "../cartPage/Cart";
import Restaurant from "./Restaurant";
import "./RestaurantNav.css";
import Private from "../Private";
import Register from "../homePage/Register";

function RestaurantNav() {
  return (
    <div>
      {/* <Route path="/login" component={Login} /> */}
      <Route path="/signup" component={Register} />
      <Route path="/cart" component={Cart} />
      <Switch>
        <Route path="/restaurant-page">
          <Private cmp={Restaurant} />
        </Route>
      </Switch>
    </div>
  );
}

export default RestaurantNav;
