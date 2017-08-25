import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="small-center">
            <Link to="/" className="col-xs-12 col-sm-3 link" id="home">April Ablon</Link>
            <div>
              <p id="title">Full Stack Software Engineer</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3 col-sm-offset-6 small-center" id="nav">
            <Link to="/" className="nav-link link">Projects</Link>
            <Link to="/about" className="nav-link link">About</Link>
            <Link to="/contact" className="nav-link link">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
