import React from 'react';
import { Link } from 'react-router-dom';
import "./SampleDash.css"


class SampleDash extends React.Component {
    render(){
        var iheight = "1000";
        var iwidth = "1000";

        console.log(iwidth);

        return (
          <div id="dashboard-container">
            <iframe src="https://mrsm.io:3000/d-solo/RWVhT8tGz/sample-dash?orgId=1&refresh=5s&from=1603804214981&to=1603825814981&panelId=2" width="500" height="200" frameborder="0"></iframe>
          </div>

        );
    }
}

export default SampleDash;
