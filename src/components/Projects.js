import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css'

class Projects extends React.Component {
  render () {
    return (
      <div id="projects">
        <div className="row">
          <div className="col-xs-12 col-sm-6 project-panel">
            <img alt="bandwith-app" src="/assets/bandwith-mocks/bandwithmock_home.jpeg" />
            <Link to="/Bandwith" className="text">
              <span className="app-title">Bandwith</span>
              <br/>
              <span className="app-description">Find, connect, and jam with local musicians.</span>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-6 project-panel">
            <img alt="fridgr-app" src="/assets/fridgr-mocks/fridgrmock_inventory1.jpeg" />
            <p className="text">
              <span className="app-title">Fridgr</span>
              <br/>
              <span className="app-description">Tracking groceries got you stressed? Chill.</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 project-panel">
            <img alt="tribal-app" src="/assets/tribal-mocks/tribalmock_play1.jpeg" />
            <p className="text">
              <span className="app-title">Tribal</span>
              <br/>
              <span className="app-description">Add songs with your friends. Vote. Start the party!</span>
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 project-panel">
            <img alt="rocket-app" src="/assets/rocket-mocks/rocketmock_past.jpeg" />
            <p className="text">
              <span className="app-title">Rocket Launch Watch</span>
              <br/>
              <span className="app-description">Count down to the next rocket launch.</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
