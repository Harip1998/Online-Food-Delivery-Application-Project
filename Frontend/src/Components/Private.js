import React from "react";
import { Redirect } from "react-router-dom";

function Private(props) {
  const Cmp = props.cmp;
  var auth = JSON.parse(localStorage.getItem("auth"));
  return (
    <div>
      {auth && auth !== undefined ? <Cmp /> : <Redirect to="/"></Redirect>}{" "}
    </div>
  );
}

export default Private;
