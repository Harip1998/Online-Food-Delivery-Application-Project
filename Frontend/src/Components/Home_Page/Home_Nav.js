import React,{Component} from 'react';
import {  Switch, Route , Redirect } from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.css';
import Singup from '../Home_Page/Signup';
import Login from '../Home_Page/Login';
import Logout from '../Restaurant_Page/Logout';
import Home from './Home';

class Home_Nav extends Component{
    render(){
        return(
            <div>
              <Switch>
                  <Route exact path="/"component={Home}/>
                  <Route path="/home"component={Home}/>
              </Switch>
            </div>
        );
    }
}

export default Home_Nav;