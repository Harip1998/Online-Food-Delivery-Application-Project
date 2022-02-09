import React, { useState, useEffect } from "react";
import FoodItems from "../Components/restaurantPage/FoodItems";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { addToCart } from "../Store/Actions/cartAction";
import axios from "axios";
import { Spinner } from "reactstrap";
import "./Reducer.css";

function FoodReducer(props) {
  const [items, setItems] = useState([]);

  /* ------ Funtion to get food items  ------ */
  const getItem = () => {
    axios
      .get(`http://localhost:4001/item`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getItem();
  }, []);

  const addToCart = (item) => {
    props.addToCart(item);
  };

  return (
    <div>
      {items.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            {items.map((item) => (
              <FoodItems
                item={item}
                addToCart={addToCart}
                inCart={
                  props.cart.length > 0 &&
                  props.cart.filter((e) => e.item.id === item.id).length > 0
                }
                key={item.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <Spinner className="rastaurant-loader" type="grow" color="success" />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    item: state.items,
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FoodReducer);
