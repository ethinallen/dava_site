import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import "./Team.css";

const src = 'https://dava-site-storage.s3.amazonaws.com/big0.png';

const Team = () => (
  <div id="teamContainer">

    <div className="team-column">
      <Card>
        <Image src={src} wrapped ui={true} />
        <Card.Content>
          <Card.Header>Drew Emery</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2020</span>
          </Card.Meta>
          <Card.Description>
            Drew is the lead front-end developer and integrator at DaVA. He performs general scripting in python and built this website with React JS.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>

    <div className="team-column">
      <Card>
        <Image src='https://dava-site-storage.s3.amazonaws.com/IMG_20201031_172533.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Bennett Meares</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2020</span>
          </Card.Meta>
          <Card.Description>
            Bennett is the tech lead and CTO of DaVA. He built our entire meta-query language from scratch and published it a python package under the MIT license.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>

    <div className="team-column">
      <Card>
        <Image src='https://dava-site-storage.s3.amazonaws.com/IMG_20201101_141157.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Zach Smith</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2020</span>
          </Card.Meta>
          <Card.Description>
            Zach builds all of our dashboards using Grafana. He is the glue between our front-end and back-end because he supplies Drew with all of his dashboard needs.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  </div>
);

export default Team;
