import React from "react";
import "./Home.css";
import Particles from 'react-particles-js';

export default () => {
  return (
    <>
      <div id="particleContainer">
        <Particles canvasClassName="particle-container" height={window.outerHeight}
          params = {{
          	    "particles": {
          	        "number": {
          	            "value": 50
          	        },
          	        "size": {
          	            "value": 1
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

      <div id="middleLeft" className="bg_triangle"></div>

      <div id="bottomLeft" className="bg_triangle"></div>

      <div id="title-descriptor">
        <h1>DaVA</h1>
        <h2>Data Visualization and Analytics</h2>
      </div>

      <div id="about-container" className="row">

        <div id="mission-statement" className="about-column">
          <div id="mission-statement-bg"></div>
          <div id="mission-title" className="title">Mission Statement</div>
          <div id="mission-body" className="body-element">
            Big data analytics can be costly and confusing — but it doesn’t have to be. We believe that data analytics should be accessible to everyone. Almost everything now generates data, so why not put it to use? Through our combined experience in data processing, analytics, and visualization, we deliver cost-effective insights to campuses of all sizes. We offer consulting services to have your campus reporting to your cloud dashboard as quickly and easily as possible.
          </div>
        </div>

        <div id="about-statement" className="about-column">
          <div id="about-title" className="title">About Us</div>
          <div id="about-body" className="body-element">
          THIS IS WHERE WE PUT MORE NONSENSE ABOUT US
          WE WERE FOUNDED IN THE FALL OF 2020 DURING THE HARSHEST WINTER SOUTH CAROLINA HAS EVER SEEN.
          WE ROSE FROM THE ASHES DEAD SET ON DISMANTLING THE VERY ESTABLISHMENT THAT WE HAD SWORN TO PROTECT.
          </div>
        </div>

      </div>

    </>
  );
};
