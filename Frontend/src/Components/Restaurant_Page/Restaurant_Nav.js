import React,{Component} from 'react';
import {  Switch, Route } from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.css';
import Singup from '../Home_Page/Signup';
import Login from '../Home_Page/Login';
import Cart from '../Cart_Page/Cart';
import Logout from './Logout';
import Restaurant from './Restaurant';
import './Restaurant_Nav.css';
class Restaurant_Nav extends Component{
    render(){
        return(
            <div>
               <Switch>
                  <Route path="/signup"component={Singup}/>
                  <Route path="/login"component={Login}/>
                  <Route path="/logout"component={Logout}/>
                  <Route path="/cart"component={Cart}/>
                  <Route path="/restaurant page"component={Restaurant}/>
               </Switch>
            </div>
        );
    }
}

export default Restaurant_Nav;