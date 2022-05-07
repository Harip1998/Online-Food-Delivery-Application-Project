import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import "../homePage/Home.css";
import { updateCartQuantity, removeFromCart} from "../../store/Actions/cartAction";

function CartItem(props) {
  const { product } = props;
  const [quantity, setQuantity] = useState(props.product.quantity);
  const [btnVisible, setBtnVisible] = useState(false);

  const handleChange = (e) => {
    if (e.target.value <= 0) {
      alert("Quantity must be greater than or equal to 1");
      return;
    }

    if (e.target.value > props.product.item.amount) {
      alert("You have exceeded the available items of this product!");
      return;
    }

    if (quantity !== e.target.value) {
      setQuantity(e.target.value);
      setBtnVisible(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateCartQuantity(props.product.item.id, quantity);
    setBtnVisible(false);
  };

  const handleRemove = (e) => {
    props.removeFromCart(props.product.item.id);
  };

  return (
    <div id="cart_det" className="container-fluid">
      <div className="block-example border border-danger">
        <div className="row">
          <div className="col-sm-3">
            <img
              className="img-responsive"
              src={product.item.img}
              alt="product"
              width="200px"
              height="150px"
            />
          </div>
          <div className="col-sm-2">
            <h6 className="product-name">
              <strong>{product.item.name}</strong>
            </h6>
          </div>
          <div className="col-sm-3">
            <div className="col-sm-3 text-right">
              <h6>
                <strong>
                  Rs.{product.item.price} <span className="text-muted"></span>
                </strong>
              </h6>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="col-xs-4">
                <input
                  type="number"
                  className="plus"
                  onChange={handleChange}
                  value={quantity}
                />
              </div>

              {btnVisible ? (
                <div className="col-xs-2">
                  <button type="submit" className="btn btn-info">
                    Update
                  </button>
                </div>
              ) : null}

              <div className="col-xs-2">
                <button
                  type="button"
                  onClick={handleRemove}
                  className="btn btn-link btn-xs"
                >
                  <span className="navbar-brand">Remove</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartQuantity: (itemId, quantity) =>
      dispatch(updateCartQuantity(itemId, quantity)),
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
