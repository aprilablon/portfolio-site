import React from 'react';
import '../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div className="row">
          <div id="profile-pic"/>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            Hi! I'm April. An aerospace engineer turned full-stack software developer. 
          </div>
        </div>
        <div className="row">
          JavaScript
        </div>
        <div className="row">
          Skills
        </div>
      </div>
    );
  }
}

export default About;
