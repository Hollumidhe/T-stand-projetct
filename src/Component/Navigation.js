import React from "react";
import logo from './Images/logo.png';
import { Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import '../Css/ListStyle.css';
const Navigation=()=>{
return(
    <> 
    <header>
        <div className="container container-flex">
            <div className="logoContainer">
                <img src={logo} alt="logo" className="logo"/>
            </div> 

            

            <Nav>
                <div className="list">
                    {/* <NavLink to="/"
                    className="listItem"
activeClassName="activeItem">Home</NavLink> */}




                    <NavLink to="/about"
                    activeClassName="activeItem"
                    className="listItem">About</NavLink>
                    <NavLink to="/Services"
                    activeClassName="activeItem"
                    className="listItem">Services</NavLink>
                    <NavLink to="/Eschew"
                    activeClassName="activeItem"
                    className="listItem">Eschew</NavLink>
                    <NavLink to="/login"
                    activeClassName="activeItem"
                    className="listItems">SignUp/Login</NavLink>
                </div>
            </Nav> 
            
            
            
        </div> 
     </header> 
    </>
)
}
export default Navigation;