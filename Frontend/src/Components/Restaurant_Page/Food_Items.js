import React, { Component } from 'react';
import'bootstrap/dist/css/bootstrap.css';
import './Restaurant_Nav.css';
import Food_Reducer from '../../Reducers/Food_Reducer';

class Food_Items extends Component
{
    state = {
        inCart: this.props.inCart
    };
 
    addToCart = (e) => {
 
        e.preventDefault();
 
        this.props.addToCart(this.props.item)
 
        this.setState({
            inCart: true
        })
    }
 
    render() {
 
        const { item } = this.props;
 
        return (
            <div className="col-sm-3">
                 <figure className="card card-product"> 
                       <div className="img-wrap"> 
                          <img className="img" alt="product pic not availalble"  src={item.img} width="341px" height="250px" ></img>
                        </div>     
                          
                          <span id = "item_name" className="navbar-brand">{item.name}</span>
                         
                          <span>{item.desc}</span>
                         
                          <b>{item.location}</b> 
                                             
                          <b className="navbar-brand">Rs.{item.price}</b>
                             
                            <div  className="bottom-wrap">
                                   {
                                       this.state.inCart?(
                                       <span className="btn btn-success">Added into Cart</span>
                                        ) : (
                                       <a  href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-middle">Order Now</a>
                                         )
                                    }                        
                              </div>
                  </figure>     
           </div>
        )
    }
}

export default Food_Items;