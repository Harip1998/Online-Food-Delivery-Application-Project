import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Login from "../homePage/Login";
import Cart from "../cartPage/Cart";
import Restaurant from "./Restaurant";
import "./RestaurantNav.css";
import Private from "../Private";

function RestaurantNav() {
  return (
    <div>
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
