import React, { Component } from 'react';
import'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import '../Home_Page/Home.css';
import { updateCartQuantity, removeFromCart } from '../../Store/Actions/cartAction';
class Cart_Item extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            quantity: this.props.product.quantity,
            btnVisible: false
        };
    }
 
    handleChange = (e) => {
 
        if(e.target.value <= 0) {
            alert("Quantity must be greater than or equal to 1");
 
            return;
        }
 
        if(e.target.value > this.props.product.item.amount) {
            alert("You have exceeded the available items of this product!");
 
            return;
        }
 
        if(this.state.quantity !== e.target.value) {
            this.setState({
                quantity: e.target.value,
                btnVisible: true
            });
        }
    }
 
    handleSubmit = (e) => {
        e.preventDefault();
 
        this.props.updateCartQuantity(this.props.product.item.id, this.state.quantity);
 
        this.setState({
            btnVisible: false
        });
    }
 
    handleRemove = (e) => {
        this.props.removeFromCart(this.props.product.item.id);
    }
 
  render() {
 
      const { product } = this.props;
 
      return (
           
          <div id="cart_det" className="container-fluid">
              <div className="block-example border border-danger">
                 <div className="row">
                       <div className="col-sm-3">
                            <img className="img-responsive" src={product.item.img} alt="product" width="200px" height="150px"/>
                        </div>
                       <div className="col-sm-2">
                            <h6 className="product-name"><strong>{product.item.name}</strong></h6>
                        </div>
                       <div className="col-sm-3">
                            <div className="col-sm-3 text-right">
                                 <h6><strong>Rs.{ product.item.price } <span className="text-muted"></span></strong></h6>
                             </div>
                      <form onSubmit={this.handleSubmit}>
                           <div className="col-xs-4">
                               <input type="number" className="plus" onChange={this.handleChange} value={this.state.quantity}/>
                            </div>
 
                             {
                                 this.state.btnVisible?(
                                      <div className="col-xs-2">
                                           <button type="submit" className="btn btn-info">Update</button>
                                      </div>
                                ) : null
                              }
 
                             <div className="col-xs-2">
                                   <button type="button" onClick={this.handleRemove} className="btn btn-link btn-xs">
                                        <span className="navbar-brand">Remove</span>
                                   </button>
                            </div>
                        </form>
                  </div>
               </div>
             </div>
          </div>
         
      )
  }
}
 
const mapDispatchToProps = (dispatch) => {
 
    return {
        updateCartQuantity: (itemId, quantity) => dispatch(updateCartQuantity(itemId, quantity)),
        removeFromCart: (itemId) => dispatch(removeFromCart(itemId))
    }
};
 
export default connect(null, mapDispatchToProps)(Cart_Item);