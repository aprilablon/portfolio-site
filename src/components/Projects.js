import React from 'react';
import '../styles/Projects.css'

class Projects extends React.Component {
  render () {
    return (
      <div id="projects">
        <div className="row">
          <div className="col-xs-12 col-sm-6 project-panel">
            <img src="/assets/bandwith.png" />
          </div>
          <div className="col-xs-12 col-sm-6 project-panel">
            <img src="/assets/fridgr.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 project-panel">
            <img src="/assets/rocket.png" />
          </div>
          <div className="col-xs-12 col-sm-6 project-panel">
            <img src="/assets/tribal.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
