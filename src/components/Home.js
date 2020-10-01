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

export default () => {
  return (


    <body>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>

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

      <div id="topRight"></div>

      <div id="middleLeft"></div>

      <div id="bottomLeft"></div>

      <div id="aboutContainer">
        <div id="aboutLeft">
          <div id="sampleText">
            <p>
              <h1>Dingle</h1> ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales sapien sed metus condimentum, id rutrum leo vulputate. Nam purus arcu, fringilla in magna a, pharetra porttitor ligula. Phasellus hendrerit elit sed nunc elementum convallis. Nunc eget libero in velit faucibus pulvinar vitae id arcu. Sed eu pretium mauris, id facilisis risus. Mauris at dolor erat. Vestibulum velit leo, elementum eu turpis vel, porta pellentesque risus.
            </p>
          </div>
        </div>
        <div id="aboutRight">
          <div id="sampleText">
            <p>
              <h1>Dangle</h1> ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales sapien sed metus condimentum, id rutrum leo vulputate. Nam purus arcu, fringilla in magna a, pharetra porttitor ligula. Phasellus hendrerit elit sed nunc elementum convallis. Nunc eget libero in velit faucibus pulvinar vitae id arcu. Sed eu pretium mauris, id facilisis risus. Mauris at dolor erat. Vestibulum velit leo, elementum eu turpis vel, porta pellentesque risus.
            </p>
            <p>
              In et magna tortor. Fusce id convallis mi. Donec commodo, nibh eu mollis lobortis, felis nisl porttitor lorem, eu tristique eros turpis sit amet magna. Suspendisse rutrum consequat lorem. In at pretium purus. Nam faucibus quam enim, sit amet euismod arcu tincidunt et. Praesent ultricies enim libero. Vestibulum tincidunt porttitor lobortis. In nulla ligula, placerat at volutpat eu, pellentesque nec ex. Sed pharetra laoreet hendrerit. Cras molestie, lacus vitae hendrerit varius, metus est condimentum enim, id tempor eros enim sed augue.
            </p>
          </div>
        </div>

      </div>
    </body>
  );
};
