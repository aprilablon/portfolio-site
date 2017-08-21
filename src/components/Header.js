import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="row header">
        <Link to="/" className="col-xs-12 col-sm-3 link" id="home">April Ablon</Link>
        <div className="col-xs-12 col-sm-9" id="nav">
          <Link to="/" className="nav-link link">Projects</Link>
          <Link to="/about" className="nav-link link">About</Link>
          <Link to="/contact" className="nav-link link">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Header;
