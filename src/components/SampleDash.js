import React from 'react';
import "./SampleDash.css"

class SampleDash extends React.Component {
    render(){

        return (
          <div id="dashboard-container">
            <iframe title="title" src="http://mrsm.io:3000/dashboard/snapshot/8lj4sWFIR1aAK115ThjbCrM35oR2ac6c" width="1000" height="1000" frameborder="0"></iframe>
          </div>

        );
    }
}

export default SampleDash;
