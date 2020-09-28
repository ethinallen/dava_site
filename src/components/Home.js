import React from "react";
import "./Home.css"
import Particles from 'react-particles-js';

export default () => {
  return (

    <body>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#264653",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 150,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 10000,
              },
              value: 3000,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
        />
      <div id="titleContainer">
        <div id="title">DaVA</div>
        <div id ="descriptor">Data Visualization and Analytics</div>
      </div>
      <div id="topRight">
      <ul>
        <li>Testing</li>
      </ul>
      </div>

      <div id="middleLeft"></div>

      <div id="bottomLeft"></div>

    </body>
  );
};
