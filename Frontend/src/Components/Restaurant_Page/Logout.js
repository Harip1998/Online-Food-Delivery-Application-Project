import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component{
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render(){
        
        return(
            <div>
                <h>you have been loged in</h>
                <link to="/Home"> Login Again</link>
            </div>
        )
    }
}

export default Logout;