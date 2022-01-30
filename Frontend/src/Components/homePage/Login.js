import React, { Component } from "react";
import { Redirect, NavLink, Link } from "react-router-dom";
import "./Home.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isRegister: false,
      email: "",
      password: "",
      islogin:false,
      successmsg:""
    };
  }
  login() {
    console.log("state", this.state);
    fetch("http://localhost:4001/users/login", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.token));
        console.log("Resss", res);
        if(res.success){
            this.setState({islogin:this})
            this.setState({successmsg:res.message});
            alert(res.message);
        }
      });
    });
  }
  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const { email, password } = this.state;
    return email.length > 5 && password.length > 4;
  }
  render() {
    // var auth = JSON.parse(localStorage.getItem("auth"));
    if (this.islogin) {
        alert(this.state.successmsg);
      return <Redirect to="/restaurant page" />;
    }
    const isEnabled = this.canBeSubmitted();
    return (
      <div>
        {!this.state.isRegister ? (
          <div>
            <form className="form" onSubmit={this.handleSubmit}>
              <h3 className="head">Log in</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <Link to="/restaurant page">
                {" "}
                <button
                  type="submit"
                  disabled={!isEnabled}
                  className="btn btn-dark btn-lg btn-block"
                  onClick={() => this.login()}
                >
                  <span className="navbar-brand">Login</span>
                </button>
              </Link>
              <p className="forgot-password text-right">
                Don't have account
                <NavLink
                  to="/signup"
                  onClick={() => this.setState({ isRegister: true })}
                >
                  <h6 className="navbar-brand" id="button">
                    SignUp
                  </h6>
                </NavLink>{" "}
              </p>
            </form>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default Login;
