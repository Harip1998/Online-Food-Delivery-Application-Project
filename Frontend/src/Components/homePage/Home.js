import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import { Button } from "@material-ui/core";
import LoginModel from "./LoginModel";

function Home() {
  const [deletemodal, setdeletemodal] = useState(false);
  const [login, setLogin] = useState(false);
  const clickedOnProceed = () => {
    setdeletemodal(false);
  };
  // useEffect(() => {
  //   if (login) {
  //     return <Redirect to="/restaurant-page" />;
  //   }
  // }, [login]);

  return (
    <div className="home-page-main-container">
      <div>
        <Grid container spacing={0}>
          <Grid item sx={12} sm={10}></Grid>
          <Grid item sx={12} sm={2}>
            <Link className="navbar-brand">
              <p onClick={() => setdeletemodal(true)} className="login-btn">
                Log in
              </p>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className="home-page-searchbar-container">
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          class="zomato-img"
          alt="img"
          role="presentation"
        />
      </div>
      <h3 className="search-bar-title">Search food Items or City</h3>
      <div className="home-page-searchbar">
        <input
          type="text"
          placeholder="Search for restuarant or dish"
          className="search-bar"
        />
        <Button
          style={{
            color: "black",
            backgroundColor: "red",
            height: "2.8em",
            textDecoration: "none",
            marginBottom: ".4em",
          }}
        >
          Search
        </Button>
      </div>
      <LoginModel
        open={deletemodal}
        Login={setLogin}
        DelModel={clickedOnProceed}
        close={() => {
          setdeletemodal(false);
        }}
        title={"Confirm"}
      />
    </div>
  );
}

export default Home;
