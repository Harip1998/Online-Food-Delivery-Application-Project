import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="low-res-container">
      <div className="row">
        <div className="col-sm-8"></div>
        <div className="col-sm-1">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/login">
              <h5 className="login">Login</h5>
            </NavLink>
          </div>
        </div>
        <div className="col-sm-1">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/signup">
              <h5 className="login">Signup</h5>
            </NavLink>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="row">
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          class="zom"
          alt="img"
          role="presentation"
        />
      </div>
      <br></br>
      <h3 className="s">Search food Items or City</h3>
      <br></br>
      <div className="row">
        <div class="center">
          <input
            type="text"
            placeholder="Search for restuarant or dish"
            name="fname"
            size="70"
            height="45"
          ></input>
          <button className="srch">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
