import React from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Eschew from "./Component/Eschew";
import Services from "./Component/Services";
import Error from "./Component/Error";
import Navigation from "./Component/Navigation";

import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Register from "./Component/Register";
import log from "./Component/log";
import testing from "./Component/testing";




const App=()=>{
  return(
    <>
    <Navigation/>
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/Eschew" component={Eschew}/>
      <Route exact path="/Error" component={Error}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/SignUp" component={SignUp}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/log.js" component={log}/>
      <Route exact path="/testing" component={testing}/>
      
      {/* <Route exact path="/List" component={List}/> */}
    </Router>
    
    </>
 
  )
}
export default App;
