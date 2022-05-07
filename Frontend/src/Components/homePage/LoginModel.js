import React, { useState, useEffect } from "react";
import { StyledDialog } from "./LoginModel.styled";
import { Link, Redirect,NavLink } from "react-router-dom";
import "./Home.css";
// import { Button } from "@material-ui/core";
// import { ImCross } from "react-icons/im";

function LoginModel(props) {
  const { DelModel, open, close, Login } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [signupflag, setSignupFlag] = useState(false);

  const sendProceed = () => {
    DelModel({
      proceed: true,
    });
  };

  /* ----- Function to register a new user ----- */
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
        alert(res.message);
      });
    });
  };

  const singupHandleSubmit = (e) => {
    if (!signupCanBeSubmitted()) {
      e.preventDefault();
      return;
    }
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  const signupCanBeSubmitted = () => {
    return email.length > 5 && password.length > 4;
  };

  const signupisEnabled = signupCanBeSubmitted();

  /* ----- Function to login ----- */
  const [isRegister, setisRegister] = useState(false);
  const [successmsg, setSuccessmsg] = useState("");

  const login = () => {
    fetch("http://localhost:4001/users/login", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((result) => {
      result.json().then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.token));
        console.log("Resss", res);
        if (res.success) {
          // setislogin(true);
          setSuccessmsg(res.message);
          alert(res.message);
        }
      });
    });
  };
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
  // var auth = JSON.parse(localStorage.getItem("auth"));
  // if (islogin) {
  //   alert(successmsg);
  //   return <Redirect to="/restaurant-page" />;
  // }
  const isEnabled = canBeSubmitted();

  return (
    <div>
      <StyledDialog open={open} onClose={close}>
        {signupflag ? (
          <form
            style={{ width: "25em", height: "35em", padding: "2em" }}
            onSubmit={singupHandleSubmit}
          >
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
              disabled={!signupisEnabled}
              className="btn btn-dark btn-lg btn-block"
              onClick={() => {
                register();
                setSignupFlag(false);
              }}
            >
              <span className="navbar-brand">SignUp</span>
            </button>
            <div className="msg-signup-btn">
              Already registered?
              <Link onClick={() => setSignupFlag(false)}>
                <p className="navbar-brand" id="singup-login-btn">
                  Login
                </p>
              </Link>
            </div>
          </form>
        ) : (
          // <form
          //   style={{ width: "25em", height: "30em", padding: "2em" }}
          //   onSubmit={loginHandleSubmit}
          // >
          //   <h3 className="head">Log in</h3>
          //   <div className="form-group">
          //     <label>Email</label>
          //     <input
          //       type="email"
          //       className="form-control"
          //       placeholder="Enter email"
          //       onChange={(e) => setEmail(e.target.value)}
          //       autoComplete="off"
          //     />
          //   </div>
          //   <div className="form-group">
          //     <label>Password</label>
          //     <input
          //       type="password"
          //       className="form-control"
          //       placeholder="Enter password"
          //       onChange={(e) => setPassword(e.target.value)}
          //       autoComplete="off"
          //     />
          //   </div>
          //   <div className="form-group">
          //     <div className="custom-control custom-checkbox">
          //       <input
          //         type="checkbox"
          //         className="custom-control-input"
          //         id="customCheck1"
          //       />
          //       {/* <label className="custom-control-label" htmlFor="customCheck1">
          //         Remember me
          //       </label> */}
          //     </div>
          //   </div>

          //   {/* <Link> */}
          //     <button
          //       type="submit"
          //       disabled={!LoginisEnabled}
          //       className="btn btn-dark btn-lg btn-block"
          //       onClick={() => {
          //         login();
          //          sendProceed();
          //       }}
          //     >
          //       <span className="navbar-brand">Login</span>
          //     </button>
          //   {/* </Link> */}
          //   <div className="msg-signup-btn">
          //     <p>Don't have account?</p>
          //     <Link onClick={() => setSignupFlag(true)}>
          //       <p className="navbar-brand" id="singup-login-btn">
          //         SignUp
          //       </p>
          //     </Link>
          //   </div>
          // </form>
          <div>
            <form style={{width:"30%"}} className="form" onSubmit={handleSubmit}>
              <h3 className="head">Log in</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
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
                  onClick={() => login()}
                >
                  <span className="navbar-brand">Login</span>
                </button>
              </Link>
              <p className="forgot-password text-right">
                Don't have account
                <NavLink to="/signup" onClick={() => setisRegister(true)}>
                  <h6 className="navbar-brand" id="button">
                    SignUp
                  </h6>
                </NavLink>{" "}
              </p>
            </form>
          </div>
        )}
      </StyledDialog>
    </div>
  );
}

export default LoginModel;
