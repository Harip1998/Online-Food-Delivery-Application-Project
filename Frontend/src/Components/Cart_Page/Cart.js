import React, { Component } from 'react';
import Cart_Item from './Cart_Item';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Home_Page/Home.css';
import'bootstrap/dist/css/bootstrap.css';

class Cart extends Component
{
    render() {
 
        let total = 0;
 
        this.props.cart.map(product => total += product.item.price * product.quantity);
 
        const cart  = this.props.cart.length > 0?(
            <div>
                <div id="cart_border" className="block-example border border-dark">
                     <div className="panel-body">
                           {
                             this.props.cart.map(product => {
                                 return (
                                          <div key={product.item.id}>
                                             <Cart_Item product={product} />                                    
                                          </div>
                                       )
                                  })
                            }
                      </div>
                  </div>
                  <div id="cart_border" className="block-example border border-dark"> 
                       <div className="row">
                            <div className="col-sm-5"></div>
                                 <div className="col-xs-11">
                                     <h5 className="text-right">Total: Rs.{total.toFixed()}</h5>
                                 </div>
                            </div>
                        <div >
                    </div> 

                    <div id="place_order" className="col-sm-5">
                            
                            <NavLink className="navbar-brand"  to="/Ordered"><h2 className="p_o">Placed Order</h2></NavLink>
                     </div>
                </div>
            </div>
 
        ) : (
            <div id="ce" className="panel-body">
                <h4 id="c_e">Cart is Empty</h4>
            </div>
        )
        return (
                <div id="full" className="block-example border border-dark">
                    <div id="ab" className="container">
                        { cart }  
                    </div>
                </div>
        )
    }
}
 
const mapStateToProps = (state) => {
 
  return {
      cart: state.cart.cart
  }
};
 
export default connect(mapStateToProps)(Cart);