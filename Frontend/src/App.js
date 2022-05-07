import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RestaurantNav from "./components/restaurantPage/RestaurantNav";
import HomeNav from "./components/homePage/HomeNav";

function App (){
    return (
      <BrowserRouter>
        <div className="App">
          <HomeNav />
          <RestaurantNav />
        </div>
      </BrowserRouter>
    );
}
export default App;
