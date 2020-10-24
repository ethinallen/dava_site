import React from 'react';
import { Link } from 'react-router-dom';



class SampleDash extends React.Component {
    render(){
        var iheight = "1000";
        var iwidth = "1000";

        console.log(iwidth);
        return (<div>
          <iframe src="http://mrsm.io:3000/dashboard-solo/snapshot/JHdlfJ1SKrQw3IgMipWJ0vxmJ39Kbhti?orgId=0&from=1313592922649&to=1395417154825&panelId=2" width="1000" height="1000" frameborder="0"></iframe>
        </div>);
    }
}

export default SampleDash;
