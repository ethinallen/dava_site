import React from "react";
import "./Home.css"
import Particles from 'react-particles-js';

function dw_getWindowDims() {
    var doc = document, w = window;
    var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
            doc.documentElement: doc.body;

    var width = docEl.clientWidth;
    var height = docEl.clientHeight;

    // mobile zoomed in?
    if ( w.innerWidth && width > w.innerWidth ) {
        width = w.innerWidth;
        height = w.innerHeight;
    }

    return {width: width, height: height};
}

const topRightStyle = {
    zIndex: "0",
    color: "black",
    textAlign: "right",
    borderWidth: "0 448px 262px 0",
    width: "0",
    height: "0",
    top: "0",
    right:"0",
    position: "absolute",
    borderStyle: "solid",
    borderColor: "transparent #2a9d8f transparent transparent ",
    animation: "3s ease-out 0s 1 slideInFromRight"
}

export default () => {
  return (


    <body>
      <Particles
        params = {{
        	    "particles": {
        	        "number": {
        	            "value": 100
        	        },
        	        "size": {
        	            "value": 2
        	        }
        	    },
        	    "interactivity": {
        	        "events": {
        	            "onhover": {
        	                "enable": true,
        	                "mode": "repulse"
        	            }
        	        }
        	    }
            }}
        />
      <div id="titleContainer">
        <div id="title">DaVA</div>
        <div id ="descriptor">Data Visualization and Analytics</div>
      </div>
      <div id="topRight">
      </div>

      <div id="middleLeft"></div>

      <div id="bottomLeft"></div>

    </body>
  );
};
