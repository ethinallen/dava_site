import React from 'react';
import { Link } from 'react-router-dom';



class SampleDash extends React.Component {
    render(){
        var iheight = "1000";
        var iwidth = "1000";

        console.log(iwidth);
        return (<div>
          <iframe src="https://snapshot.raintank.io/dashboard/snapshot/OzV0nr2Ir0CnDeUWf7ZTDP8H6tA6LTCw?orgId=2" width="1000" height="1000" frameborder="0"></iframe>
        </div>);
    }
}

export default SampleDash;
