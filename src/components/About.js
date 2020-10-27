import React from "react";
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div id="aboutContainer">
      <div id="aboutLeft">
        <div class="sampleText">
        <div class="about">Who We Are</div>
        <Link to ='/sample' ><button>
              Go to Sample Dash
            </button></Link>
          <p>
            We are a company that specializes in giving customers insights with their data. We have built a platform that allows utility departments the ability to visualize how their campus is consuming resources in real time.
          </p>
        </div>
      </div>
      <div id="aboutRight">
        <div class="sampleText">
          <div class="about">Why DaVA</div>
          <p>
            At DaVA, we believe that  the key to delighting customers is to make interacting with our platform as simple as possible. Our entire platform was designed with scalability in mind so that, regardless of the size and growth of your campus, real time analytics will always be available at minimal cost.
          </p>
        </div>
      </div>
    </div>
  );
}
