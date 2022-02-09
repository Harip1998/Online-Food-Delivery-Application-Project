import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./RestaurantNav.css";
import Search from "./Search";
import FoodReducer from "../../Reducers/FoodReducer";

function Restaurant(props) {
  const removeStorage = () => {
    // Clear local storage items(token).
    localStorage.clear();
  };
  {
    props.cartUpdated();
    let total = 0;
    props.cart.map(
      (product) => (total += product.item.price * product.quantity)
    );
  }

  var user = JSON.parse(localStorage.getItem("users"));
  console.log(user);

  return (
    <div>
      <div id="navbar" className="container-fluid">
        <div id="rest_row1" className="row">
          <div className="col-sm-2">
            <NavLink id="z" className="navbar-brand" to="/restaurant page">
              <h4>Zomato</h4>
            </NavLink>
          </div>
          <div id="centre" className="col-sm-5">
            <Search />
          </div>
          <div className="col-sm-1">
            <div className="navbar-header">
              <p className="user">harinath</p>
            </div>
          </div>
          <div className="col-sm-1">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <h6 onClick={removeStorage} className="logout">
                  Logout
                </h6>
              </Link>
            </div>
          </div>

          {/* <div className="col-sm-2">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to="/signup">
                <h6 className="new_acount">Create an account</h6>
              </NavLink>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container-fluid">
        <div id="cart_row" className="row">
          <div className="col-sm-10"></div>
          <img
            id="cart_icon"
            src="https://b.zmtcdn.com/images/icons/order-online.svg"
            alt="cart icon"
          />
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/cart">
                {props.cart.length > 0 ? (
                  <span className="label label-info">
                    {props.cart.length} items
                  </span>
                ) : null}
                <i
                  id="navcarticon"
                  className="glyphicon glyphicon-shopping-cart"
                ></i>{" "}
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <h2>Restaurant and Items List</h2>
        <FoodReducer />
      </div>
      <br />
    </div>
  );
  //   }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    cartUpdated: () => {
      return true;
    },
  };
};

export default connect(mapStateToProps)(Restaurant);
