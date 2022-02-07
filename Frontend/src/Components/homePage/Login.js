// import React, { useState } from "react";
// import { Redirect, NavLink, Link } from "react-router-dom";
// import "./Home.css";

// function Login(props) {
//   // const [isRegister, setisRegister] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [islogin, setislogin] = useState(false);
//   const [successmsg, setSuccessmsg] = useState("");

//   const login = () => {
//     fetch("http://localhost:4001/users/login", {
//       method: "POST",
//       headers: {
//         Accept: "Application/json",
//         "Content-Type": "Application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     }).then((result) => {
//       result.json().then((res) => {
//         localStorage.setItem("auth", JSON.stringify(res.token));
//         console.log("Resss", res);
//         if (res.success) {
//           setislogin(true);
//           setSuccessmsg(res.message);
//           alert(res.message);
//         }
//       });
//     });
//   };

//   const handleSubmit = (evt) => {
//     if (!canBeSubmitted()) {
//       evt.preventDefault();
//       return;
//     }
//     alert(`Signed up with email: ${email} password: ${password}`);
//   };

//   const canBeSubmitted = () => {
//     return email.length > 5 && password.length > 4;
//   };
//   // var auth = JSON.parse(localStorage.getItem("auth"));
//   if (islogin) {
//     alert(successmsg);
//     return <Redirect to="/restaurant-page" />;
//   }
//   const isEnabled = canBeSubmitted();

//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <h3 className="head">Log in</h3>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="off"
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="off"
//           />
//         </div>
//         <div className="form-group">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <Link to="/restaurant-page">
//           <button
//             type="submit"
//             disabled={!isEnabled}
//             className="btn btn-dark btn-lg btn-block"
//             onClick={() => login()}
//           >
//             <span className="navbar-brand">Login</span>
//           </button>
//         </Link>
//         <div className="forgot-password-text">
//           <p>Don't have account</p>
//           {/* <NavLink to="/signup" onClick={() => setisRegister(true)}> */}
//           <NavLink to="/signup" className="signup-btn">
//             <h6 className="navbar-brand" >
//               SignUp
//             </h6>
//           </NavLink>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default Login;
