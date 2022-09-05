import React from "react";
import {NavLink} from 'react-router-dom';
import '../Css/HomeAbout.css';
import logo from './Images/logo.png';

const Login=()=>{
return(
    <>
    <div className="main">
        <div className="sub-one">
        <div>
            
        </div>
           <div className="form">
               <h1>Login Page</h1>
               {/* <img src={} alt="email" className="email"/> */}
               <label1 for="fname">Email Address:</label1><br></br>
               <input type="text" placeholder="user name" className="form-control"/><br></br>
               {/* <img src={} alt="password" className="password"/> */}
               <label for="fname">Password</label><br></br>
               <input type="text" placeholder="password" className="form-control"/><br></br>
                <div className="form10">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customcheck"/>
                        <label3 className="custom-control-label" htmlFor="customCheck2">Remember me</label3>

                    </div>
                </div>

               {/* <button type="submit" className="btn btn-primary btn-block">Login</button> */}
               <div className="newLogin">
               <button> <a href="#">Login</a></button>
               </div>
               <h3 className="forgot-password text-right">Forget<a href="#"> password</a></h3>
               <h5>Don't Have an Account? <NavLink to="/SignUp">SignUp</NavLink> </h5>
               
           </div>
           <div>
               
               
           </div>
           <div>
           
           </div>
        </div>
    </div>
    </>
)
}
export default Login;