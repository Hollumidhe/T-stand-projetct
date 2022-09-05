import React from "react";
import '../Css/HomeAbout.css';
import {NavLink} from 'react-router-dom';

const SignUp=()=>{
return(
    <>
    <div className="main12">
        <div className="sub-two">
        <div>
            
        </div>
           <div className="form">
               <h1>Welcome!</h1>
               
               <label for="fname">Full name</label><br></br>
               <input type="text" placeholder="Enter Your full name" className="name"/><br></br>
               <label1 for="fname">Email Address</label1><br></br>
               <input type="text" placeholder="Enter Your Email Address" className="name"/><br></br>
               
               <label for="fname">Password</label><br></br>
               <input type="text" placeholder="Enter your password" className="name"/><br></br>
               <label2 for="fname">Comfirm Password</label2><br></br>
               <input type="text" placeholder="Comfirm your password" className="name"/><br></br>

               <div className="newLogin1">
               <button> <a href="#">SignUp</a></button>
               </div>
               <h5>OR</h5>
               <button1> <a href="#">Google</a></button1>
               <p>Already Registered? <NavLink to="/Login">Login</NavLink> </p>
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
export default SignUp;