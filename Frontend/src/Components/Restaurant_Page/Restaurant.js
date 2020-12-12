import React,{Component} from 'react';
import'bootstrap/dist/css/bootstrap.css';
import { NavLink , Redirect ,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Restaurant_Nav.css';
import Search from './Search';
import FoodReducer from "../../Reducers/Food_Reducer";

//import { Provider } from 'react-redux';

class Restaurant extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let logedIn = true
        if(token==null){
            logedIn=false
        }
        this.state = {
            logedIn
        }
    
    }
    render(){
        {   
        if(this.state.logedIn===false){
            return <Redirect to="/login" />
        }
    }
      {  this.props.cartUpdated();
         
        let total = 0;
 
        this.props.cart.map(product => total += product.item.price * product.quantity);  }
        return(
            <div>
              <div id="navbar" className="container-fluid">
                 <div id="rest_row1" className="row">
                      <div  className="col-sm-2">
                           <NavLink id="z" className="navbar-brand" to="/restaurant page"><h4>Zomato</h4></NavLink>
                       </div>
                       <div id="centre"  className="col-sm-5">
                           <Search/>
                        </div>
                        <div className="col-sm-2">
                            <div className="navbar-header">
                                 <NavLink className="navbar-brand" to="/login"><h6 className="log_in">Log in</h6></NavLink>
                                 <Link className="navbar-brand" to="/logout"><h6 className="log_in">Logout</h6></Link>
                             </div>
                         </div> 
                      
                         <div className="col-sm-2">
                             <div className="navbar-header">
                                 <NavLink className="navbar-brand" to="/signup"><h6 className="log_in">Create an account</h6></NavLink>
                             </div>
                          </div>  
                    </div>
               </div>  

                <div className="container-fluid">
                    <div id="cart_row" className="row">
                    <div className="col-sm-10"></div>
                    <img id="cart_icon" src="https://b.zmtcdn.com/images/icons/order-online.svg" />
                    <ul className="nav navbar-nav navbar-right">
                               <li ><  NavLink to="/cart" >
                                      {
                                         this.props.cart.length > 0 ? (
                                         <span className="label label-info">{ this.props.cart.length } items</span>
                                         ) : null
                                      }
                                        <i id="navcarticon" className="glyphicon glyphicon-shopping-cart">
                              </i> Cart</NavLink></li>
                      </ul>
                   </div>
                </div>   
                <div className="container-fluid">
                    <h2 >Restaurant and Items List</h2>
                    <FoodReducer />  
                  </div>
                  <br/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};
 

export default connect(mapStateToProps)(Restaurant);