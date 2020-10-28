import React from "react";
import "./Home.css";
import Particles from 'react-particles-js';
import About from "./About.js";
import Demo from "./Demo.js"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export default () => {
  return (
    <body>
      <div id="particleContainer">
        <Particles
          params = {{
          	    "particles": {
          	        "number": {
          	            "value": 100
          	        },
          	        "size": {
          	            "value": 5
          	        }
          	    },
          	    "interactivity": {
          	        "events": {
          	            "onhover": {
          	                "enable": false,
          	                "mode": "repulse"
          	            }
          	        }
          	    }
              }}
          />
      </div>

      <div id="titleContainer">
        <div id="title">DaVA</div>
        <div id ="descriptor">Data Visualization and Analytics</div>
      </div>

      <div id="middleLeft"></div>

      <div id="bottomLeft"></div>

      <About />
      <Demo />
    </body>
  );
};
