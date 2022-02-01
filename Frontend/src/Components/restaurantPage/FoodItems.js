import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./RestaurantNav.css";

function FoodItems(props) {
  const { item } = props;
  const [inCart, setInCart] = useState(props.inCart);
  
  const addToCart = (e) => {
    e.preventDefault();
    props.addToCart(props.item);
    setInCart(true);
  };

  return (
    <div className="col-sm-3">
      <figure className="card card-product">
        <div className="img-wrap">
          <img
            className="img"
            alt="product pic not availalble"
            src={item.img}
            width="341px"
            height="250px"
          ></img>
        </div>
        <span id="item_name" className="navbar-brand">
          {item.name}
        </span>
        <span>{item.desc}</span>
        <b>{item.location}</b>
        <b className="navbar-brand">Rs.{item.price}</b>
        <div className="bottom-wrap">
          {inCart ? (
            <span className="btn btn-success">Added into Cart</span>
          ) : (
            <a
              href="/#"
              onClick={addToCart}
              className="btn btn-sm btn-primary float-middle"
            >
              Order Now
            </a>
          )}
        </div>
      </figure>
    </div>
  );
}

export default FoodItems;
