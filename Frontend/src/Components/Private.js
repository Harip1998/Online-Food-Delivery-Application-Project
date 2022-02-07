import React from "react";
import { Redirect } from "react-router-dom";

function Private(props) {
  const Cmp = props.cmp;
  console.warn(localStorage.getItem("auth"));
  var auth = JSON.parse(localStorage.getItem("auth"));
  return <div> {auth ? <Cmp /> : <Redirect to="/restaurant-page"></Redirect>} </div>;
}

export default Private;
