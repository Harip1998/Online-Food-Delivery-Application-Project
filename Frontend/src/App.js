import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RestaurantNav from "./Components/restaurantPage/RestaurantNav";
import HomeNav from "./Components/homePage/HomeNav";

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
