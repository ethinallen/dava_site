import React from 'react';
import { Link } from 'react-router-dom';



class SampleDash extends React.Component {
    render(){
        var iheight = "1000";
        var iwidth = "1000";

        console.log(iwidth);
        return (<div>
          <iframe title="Sample Dava Dashboard" src="https://snapshot.raintank.io/dashboard/snapshot/TgES0TiEvrPSp8oCecXD9JOAfeCAFibX" width="1500" height="1000" frameborder="0" ></iframe>
        </div>);
    }
}

export default SampleDash;
