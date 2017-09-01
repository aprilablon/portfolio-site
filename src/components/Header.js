import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    let menu;
    if (this.state.menuOpen) {
      menu = <div id="dropdown">
            <Link to="/Bandwith" className="nav-link drop-link">Bandwith</Link>
            <Link to="/Fridgr" className="nav-link drop-link">Fridgr</Link>
            <Link to="/Tribal" className="nav-link drop-link">Tribal</Link>
            <Link to="/Rocket" className="nav-link drop-link">Rocket Launch Watch</Link>
        </div>
    } else {
      menu = ""
    }
    return (
      <div className="header">
        <div className="row">
          <div className="col-xs-12 col-sm-4 brand-text">
            <Link to="/" className="link" id="home">April Ablon</Link>
            <div>
              <p id="title">Full Stack Software Engineer</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8" id="nav">
            <div id="menu">
              <div className="nav-link link" onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu}>Projects</div>
            </div>
            <Link to="/about" className="nav-link link">About</Link>
            <Link to="/contact" className="nav-link link">Contact</Link>
            <CSSTransitionGroup transitionName="menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}> 
              {menu} 
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
