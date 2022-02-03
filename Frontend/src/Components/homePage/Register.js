import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const [isRegister, setisRegister] = useState(false);

  const register = () => {
    fetch("http://localhost:4001/users/register", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ name, email, password, password2 }),
    }).then((result) => {
      result.json().then((res) => {
        console.log("Resss", res);
        localStorage.setItem("auth", JSON.stringify(res.token));
      });
    });
  };

  const isEnabled =
    name.length > 3 &&
    email.length > 5 &&
    password.length > 4 &&
    password2.length > 4;

  const handleSubmit = (evt) => {
    if (!canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  const canBeSubmitted = () => {
    return email.length > 5 && password.length > 4;
  };
 
  return (
    <div className="reg">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="head">SignUp</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!isEnabled}
          className="btn btn-dark btn-lg btn-block"
          onClick={() => register()}
        >
          <span className="navbar-brand">SignUp</span>
        </button>
        <p className="forgot-password text-right">
          {" "}
          Already registered{" "}
          <NavLink
            to="/login"
            //  onClick={() => setisRegister(false)}
          >
            <h6 className="navbar-brand" id="button">
              Login
            </h6>
          </NavLink>{" "}
        </p>
      </form>
    </div>
  );
}

export default Register;
