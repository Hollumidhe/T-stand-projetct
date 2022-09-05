import React from "react";
import {NavLink} from 'react-router-dom';
import first1 from './Images/first1.png';
import Capture1 from './Images/Capture1.PNG';
import new2 from './Images/new2.png';
import Capture3 from './Images/Capture3.PNG';
import pay from './Images/pay.jpg';
import pal from './Images/pal.jpg';
import fave from './Images/fave.jpg';
import '../Css/HomeAbout.css';
import '../Css/ListStyle.css';

const Home=()=>{
return(
    <>
    <div className="mainSection">
        <div class="contentBox">
            <p>IT'S SECURE, RELIABLE & FAST</p>
            <h1>We aim to preserve the trust in business transactions.</h1>
            <NavLink to="/SignUp" className="readMore1">Create Account</NavLink>
            <NavLink to="/about" className="readMore2">Learn More   </NavLink>
        </div>
       
        <div className="imgContainer">
            <img src={first1} alt="home"/>
        </div>
    </div>
    <div className="anotherSection">
        <div className="Imgbody">
            <img src={Capture1} alt="home2"/>
        </div>
    <div className="contentBox1">
        <h4>Why T-stand?</h4>
        <p>&#9745; To prevent trust in business transactions</p>
        <p>&#9745; To safeguard parties in the transactions</p>
        <p>&#9745; To protect against frudulent claims and transactions.</p>
        <p>&#9745; To ensure parties involve in a transaction discharged their obligations</p>

    </div>
  

    </div>

    <div className="nextContent">
        
        <div className="iconClass1">
         <img src={pay} alt="logoIcon1"/>
         </div>
         <div className="iconClass2">
         <img src={pal} alt="logoIcon2"/> 
         </div>
         <div className="iconClass3">
         <img src={fave} alt="logoIcon3"/> 
        </div>
            
    </div>


    <div className="conBig">
        <div className="bigLog">
            <h2>The Promise of "trust in business transaction".</h2>
            <p>We strive to ensure that parties in the business transaction discharge their obligations.</p>
            <p>We serve as an intermediary between parties to the transactions</p>
            <h3>How?</h3>
            <p>&#9745;    Buyers pay us the value of transaction with seller.</p>
            <p>&#9745;    seller delivers ordered items a agreed with Buyers.</p>
            <p>&#9745;    We pay seller upon deliver and confirmation.</p>
        </div>
        <div className="logImg">
            <img src={new2} alt="imaglog"/>

        </div>

    </div>

    <div className="conLast">
    <div className="logImg2">
            <img src={Capture3} alt="imaglog2"/>

        </div>

        <div className="conLog">
            <h2>We are "trust" solution, not a payment solution.</h2>
            <p>We believe peop;e will continue to do business withour boundaries when they are sure they will get their due.</p>
            <p>We believeits not about payment but "trust".</p>
            
        </div>
         </div>

    </>
)
}
export default Home;