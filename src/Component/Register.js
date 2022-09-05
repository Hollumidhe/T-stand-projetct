import React from "react";
import '../Css/HomeAbout.css';
import {NavLink} from 'react-router-dom';
import Enter from './Images/Enter.PNG';

const SignUp=()=>{
return(
    <>
    <div className="main30">
        <div className="sub-three">
        <div>
            
        </div>
           <div className="form40">
               <h1>Register!</h1>
               <p>Fill in the information below to completeyour registration.</p>
               
               <label for="fname">First name</label><br></br>
               <input type="text" placeholder="Enter Your first Name" className="name"/><br></br>
               <label1 for="fname">Last Name</label1><br></br>
               <input type="text" placeholder="Enter Your Last Name" className="form-control"/><br></br>
               
               <label for="fname">Email Address</label><br></br>
               <input type="text" placeholder="Enter your Email Address" className="form-control"/><br></br>
               <label2 for="fname">Contact Number</label2><br></br>
               <input type="text" placeholder="Enter Your Contact" className="form-control"/><br></br>
               <label2 for="fname">Business/Residential Address</label2><br></br>
               <input type="text" placeholder="Enter Your Address" className="form-control"/><br></br>
               <label2 for="fname">Business/Personal ID</label2><br></br>
               <input type="text" placeholder="Enter your ID" className="form-control"/><br></br>
               <label2 for="fname">Country </label2><br></br>
               <input type="text" placeholder="Enter your Country" className="form-control"/><br></br>
               <label2 for="fname">State</label2><br></br>
               <input type="text" placeholder="Enter your State" className="form-control"/><br></br>

               <button>Submit</button>
               
           </div>
           <div>
               
               
           </div>
           <div>
           
           </div>
        </div>
        <div className="sub-four">
        <div className="imgContainer40">
              <img src={Enter} alt="home"/> 
        </div>
        </div>
    </div>
    </>
)
}
export default SignUp;