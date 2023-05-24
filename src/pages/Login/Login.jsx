import React, {Component} from "react";
import Swal from "sweetalert2";

import './Login.css'

import chlLogo from '../../Assets/CHL-Logo.png'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            emailLogin: "",
            passwordLogin:""
        }
    }

    loginButton = (e) => {
        e.preventDefault();

        if(this.state.emailLogin === "" || this.state.passwordLogin === ""){
            Swal.fire({
                title: 'Isi Username & password anda',
                confirmButtonText: 'Ok',
                allowOutsideClick: false
              })
        }else if(this.state.emailLogin !== "admin"){
            Swal.fire({
                title: 'Wrong Username',
                confirmButtonText: 'Ok',
                allowOutsideClick: false
              })
        }else if(this.state.passwordLogin !== "admin"){
            Swal.fire({
                title: 'Wrong Password',
                confirmButtonText: 'Ok',
                allowOutsideClick: false
              })
        }
        else{
            localStorage.setItem('TokenCHL', "RanDomStoRageToken")
            window.location.reload();
        }

        
    
      }

    render(){
        return(
            <main id="login-main" >
                
                <section className="box" id="logo-box" >
                    <img src={chlLogo} alt="Login" />
                    <h2>Mazenta</h2>
                </section>

                <section className="box" id="login-box" >
                    <h3>Login</h3>
                    <form onSubmit={this.loginButton} >
                        <label>Username : <input onChange={(e) => this.setState({emailLogin: e.target.value})} type="text" placeholder="Username" /></label>
                        <label>Password : <input onChange={(e) => this.setState({passwordLogin: e.target.value})} type= "password" placeholder="Password" /></label>
                        <button type="submit"  id="login-button" >Login</button>
                    </form>
                    <div className="button-group" >
                        {/* <Link id="link-button" to='/home' ><button>Click</button></Link> */}
                        {/* <button type="submit"  id="login-button" >Login</button> */}
                        
                    </div>
                </section>

            </main>
        )
    }

}

export default Login;