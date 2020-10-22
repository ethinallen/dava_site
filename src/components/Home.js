import React from "react";
import "./Home.css";
import Particles from 'react-particles-js';
import About from "./About.js";

export default () => {
  return (


    <body>

      <div id="particleContainer">
        <Particles
          params = {{
          	    "particles": {
          	        "number": {
          	            "value": 200
          	        },
          	        "size": {
          	            "value": 2
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

      <div id="topRight">
        <div id="home-nav-options">
          <ul>
            <li>Testing</li>
            <li>Testing</li>
            <li>More Testing</li>
          </ul>
        </div>
      </div>

      <div id="middleLeft"></div>

      <div id="bottomLeft"></div>

      <About />
    </body>
  );
};
