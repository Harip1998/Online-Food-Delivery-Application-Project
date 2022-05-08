import React, { useEffect, useState } from "react";
import { StyledDialog } from "./LoginModel.styled";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import "./Home.css";
import "./LoginSignUpModel.css";
import { ImCross } from "react-icons/im";

function LoginModel(props) {
  const {
    open,
    close,
    OpenRegModel,
    OpenLoginModel,
    SetopenRegModel,
    SetopenLoginModel,
  } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isloginMsg, setIsloginMsg] = useState("");
  console.log("isloginMsg", isloginMsg);

  /* ----- Function to register a new user ----- */
  const userRegistration = () => {
    fetch("http://localhost:4001/useuserRs/register", {
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
  };

  const signupCanBeSubmitted = () => {
    return email.length > 5 && password.length > 4;
  };

  const signupisEnabled = signupCanBeSubmitted();

  /* ----- Function to login ----- */

  const userLogin = () => {
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
        setIsloginMsg(res.message);
      });
    });
  };
  const handleSubmit = (evt) => {
    if (!canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
  };

  const canBeSubmitted = () => {
    return email.length > 5 && password.length > 4;
  };

  useEffect(() => {
    if (isloginMsg !== "") {
      close();
      Swal.fire({
        title: isloginMsg,
        width: 500,
        padding: "3em",
        color: "#716add",
      }).then(() => {
        // return <Redirect to="/restaurant-page" />;
      });
    }
  }, [isloginMsg]);
  const isEnabled = canBeSubmitted();

  return (
    <div>
      <StyledDialog
        open={open}
        onClose={() => {
          close();
          SetopenRegModel(false);
          SetopenLoginModel(false);
        }}
      >
        <div className="cross-icon">
          <ImCross
            onClick={() => {
              close();
              SetopenRegModel(false);
              SetopenLoginModel(false);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        {OpenRegModel && (
          <>
            <div className="signUp-form">
              <form onSubmit={singupHandleSubmit}>
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
                  className="signUp-login-submit-btn"
                  onClick={() => {
                    userRegistration();
                    SetopenLoginModel(true);
                    SetopenRegModel(false);
                  }}
                >
                  <span className="navbar-brand">SignUp</span>
                </button>
                <div className="msg-signup-btn">
                  Already registered?
                  <Link
                    onClick={() => {
                      SetopenLoginModel(true);
                      SetopenRegModel(false);
                    }}
                  >
                    <p className="navbar-brand" id="singup-login-btn">
                      Login
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </>
        )}
        {OpenLoginModel && (
          <>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
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

                <Link>
                  <button
                    type="submit"
                    disabled={!isEnabled}
                    className="signUp-login-submit-btn"
                    onClick={() => userLogin()}
                  >
                    <span className="navbar-brand">Login</span>
                  </button>
                </Link>
                <div className="msg-signup-btn">
                  <p>Don't have account?</p>
                  <Link
                    onClick={() => {
                      SetopenLoginModel(false);
                      SetopenRegModel(true);
                    }}
                  >
                    <p className="navbar-brand" id="singup-login-btn">
                      SignUp
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </>
        )}
      </StyledDialog>
    </div>
  );
}

export default LoginModel;
