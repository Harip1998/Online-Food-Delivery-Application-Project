import React,{Component} from 'react';
import{Redirect} from 'react-router-dom'
import './Home.css';
class Login extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let logedIn = true

        if(token==null){
            logedIn=false
        }
        this.state = {
            username: '',
            password: '',
            logedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username , password} = this.state
        //login code
        if(username==="A" , password === "B"){
            localStorage.setItem("token" , "adfjadjdssdf")
            this.setState({
                logedIn : true
            })
        }
        
    }
    render(){

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        if(this.state.logedIn){
            return <Redirect to= "/restaurant page" />

        }
        
        return(
            <div className="login_page">
               <h3 className="navbar-brand">Login</h3>
                      <form onSubmit={this.submitForm}>
                            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
                             <br />
                             <br/>
                             <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                             <br />
                             <br />
                              <input className="sub" type="submit" />

                        </form>           
            </div>
        );
    }
}
export default Login;