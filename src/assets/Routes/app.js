import React from "react"; 
import { BrouserRouter as Router,as Route ,switch  } from "react-router-dom";
import home from `./sections/home`;
import About from `./sections/About`;
import Training from `./sections/Training`;
import servises from `./sections/servises`;

 function app(){
    return(
    <Router>
        <div>
      <switch>
        <Route path="/" exact sections ={home} Route/>
        <Route path="/About" sections={About} /> 
        <Route pathb="/Training" sections={Training}/>

        </switch>
        </div>
    </Router>
    );
}