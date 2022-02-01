import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  }
  register() {
    console.log("state", this.state);
    fetch("http://localhost:4001/users/register", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res.token);
        localStorage.setItem("auth", JSON.stringify(res.token));
      });
    });
  }

  render() {
    const { name, email, password, password2 } = this.state;
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
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              onChange={(e) => this.setState({ password2: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={!isEnabled}
            className="btn btn-dark btn-lg btn-block"
            onClick={() => this.register()}
          >
            <span className="navbar-brand">SignUp</span>
          </button>
          <p className="forgot-password text-right">
            {" "}
            Already registered{" "}
            <NavLink
              to="/login"
              onClick={() => this.setState({ isRegister: false })}
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
}

export default Register;
