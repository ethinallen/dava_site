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
              <h1>Lorem</h1> ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales sapien sed metus condimentum, id rutrum leo vulputate. Nam purus arcu, fringilla in magna a, pharetra porttitor ligula. Phasellus hendrerit elit sed nunc elementum convallis. Nunc eget libero in velit faucibus pulvinar vitae id arcu. Sed eu pretium mauris, id facilisis risus. Mauris at dolor erat. Vestibulum velit leo, elementum eu turpis vel, porta pellentesque risus. Etiam sagittis neque ac lorem efficitur posuere. Nulla tincidunt dictum convallis. Donec fermentum mi at scelerisque convallis. Proin faucibus nunc in elit tempor commodo nec nec nibh. Cras malesuada est vitae nisi vestibulum tincidunt. Praesent augue turpis, tempor placerat sem quis, convallis scelerisque lorem. Quisque tristique arcu et magna interdum, sed feugiat ligula elementum.
            </p>
          </div>
          </div>
        <div id="aboutRight">
          <div id="sampleText">
            <p>
              <h1>Lorem</h1> ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales sapien sed metus condimentum, id rutrum leo vulputate. Nam purus arcu, fringilla in magna a, pharetra porttitor ligula. Phasellus hendrerit elit sed nunc elementum convallis. Nunc eget libero in velit faucibus pulvinar vitae id arcu. Sed eu pretium mauris, id facilisis risus. Mauris at dolor erat. Vestibulum velit leo, elementum eu turpis vel, porta pellentesque risus. Etiam sagittis neque ac lorem efficitur posuere. Nulla tincidunt dictum convallis. Donec fermentum mi at scelerisque convallis. Proin faucibus nunc in elit tempor commodo nec nec nibh. Cras malesuada est vitae nisi vestibulum tincidunt. Praesent augue turpis, tempor placerat sem quis, convallis scelerisque lorem. Quisque tristique arcu et magna interdum, sed feugiat ligula elementum.
            </p>
            <p>
              In et magna tortor. Fusce id convallis mi. Donec commodo, nibh eu mollis lobortis, felis nisl porttitor lorem, eu tristique eros turpis sit amet magna. Suspendisse rutrum consequat lorem. In at pretium purus. Nam faucibus quam enim, sit amet euismod arcu tincidunt et. Praesent ultricies enim libero. Vestibulum tincidunt porttitor lobortis. In nulla ligula, placerat at volutpat eu, pellentesque nec ex. Sed pharetra laoreet hendrerit. Cras molestie, lacus vitae hendrerit varius, metus est condimentum enim, id tempor eros enim sed augue.

              Etiam eget venenatis neque. Nunc porta elit sed elit sodales, eu sollicitudin massa ornare. Sed auctor eros quis urna porta congue. Cras aliquam mi quis sem vestibulum, id fermentum massa gravida. Aliquam non metus lorem. Integer dapibus risus at efficitur pulvinar. Etiam et gravida leo. Sed consequat diam rutrum mauris hendrerit, vitae porta magna semper. Vestibulum commodo tellus id erat vehicula, vitae ultrices leo pellentesque. Nam a pulvinar sapien. Maecenas sollicitudin gravida ex a tincidunt. Suspendisse potenti.

              Donec quis ultrices est. Proin pretium auctor ligula, sed scelerisque diam. Nunc eget ultrices nulla. Cras quis mattis augue, faucibus efficitur nulla. Nullam non dolor semper mi vulputate aliquet sit amet eu mi. Donec semper congue metus nec volutpat. Maecenas ullamcorper feugiat nisl non tempus.

              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc consectetur rutrum bibendum. Integer faucibus pharetra enim, sed vehicula tortor dapibus quis. Nunc risus elit, molestie nec nisl at, pulvinar mollis lacus. Nullam hendrerit consectetur massa ac malesuada. In tristique consequat dapibus. Morbi aliquet felis eget tortor elementum, vitae vulputate tellus suscipit. Duis pretium eu erat ac tempor. Etiam tempus lorem sem, ac posuere eros euismod ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus imperdiet ullamcorper. Suspendisse eleifend, est eu consequat condimentum, orci quam sollicitudin nulla, sit amet scelerisque lectus est eu leo. Aliquam lacinia elit in ante sodales, non consectetur ante tincidunt. Curabitur ut tincidunt purus. Nulla semper at tortor ac consequat. Pellentesque sagittis eros vel lacus tempor mattis.
            </p>
          </div>
        </div>

      </div>
    </body>
  );
};
