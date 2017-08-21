import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="row header">
        <div className="col-xs-12 col-sm-3" id="home">April Ablon</div>
        <div className="col-xs-12 col-sm-9" id="nav">
          <div className="nav-link">Projects</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Contact</div>
        </div>
      </div>
    );
  }
}

export default Header;
