import React from 'react';
import '../styles/Project.css';

const active = '#E91E63';
const inactive = '#FFB0CA';

class Rocket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panel: 0,
      min: 0,
      max: 3,
      imgs: [
        '/assets/rocket-mocks/rocketmock_past.jpeg',
        '/assets/rocket-mocks/rocketmock_home.jpeg',
        '/assets/rocket-mocks/rocketmock_future.jpeg',
        '/assets/rocket-mocks/rocketmock_favorite.jpg'
      ],
      titles: [
        'Keep up to date on rocket launches',
        'View future or past launches',
        'Get info for as many future launches as you want',
        'Create a list of favorite launches'
      ],
      descriptions: [
        'Using rocket launch API',
        'Get info and watch past SpaceX falcon launches',
        'Enter how many future launches you want to see, and it will be returned for you',
        'Favorite both past and future launches to create a list just for you'
      ],
      alts: [
        'rocket-past',
        'rocket-home',
        'rocket-future',
        'rocket-favorite'
      ],
      dotStatus: [
        { backgroundColor: active },
        { backgroundColor: inactive },
        { backgroundColor: inactive },
        { backgroundColor: inactive }
      ]
    };

    this.clickPrevious = this.clickPrevious.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.selectPanel = this.selectPanel.bind(this);
  }

  clickPrevious() {
    if (this.state.panel === this.state.min) {
      return;
    }
    let nextPanelValue = this.state.panel - 1;let styleUpdate = new Array(4);
    styleUpdate.fill({ backgroundColor: inactive });
    styleUpdate[nextPanelValue] = { backgroundColor: active };
    this.setState({
      panel: nextPanelValue,
      dotStatus: styleUpdate
    });
  }

  clickNext() {
    if (this.state.panel === this.state.max) {
      return;
    }
    let nextPanelValue = this.state.panel + 1;let styleUpdate = new Array(4);
    styleUpdate.fill({ backgroundColor: inactive });
    styleUpdate[nextPanelValue] = { backgroundColor: active };
    this.setState({
      panel: nextPanelValue,
      dotStatus: styleUpdate
    });
  }

  selectPanel(panelNumber) {
    let styleUpdate = new Array(4);
    styleUpdate.fill({ backgroundColor: inactive });
    styleUpdate[panelNumber] = { backgroundColor: active };
    this.setState({
      panel: panelNumber,
      dotStatus: styleUpdate
    });
  }

  render() {
    return (
      <div id="project-page">
        <div>
          <p id="app-header">Rocket Launch Watch</p>
        </div>
        <div id="visit-div">
          <a target="_blank" rel="noopener noreferrer" href="http://bitly.com/tribal-app">
            <button id="visit-app">Visit</button>
          </a>
        </div>
        <div className="app-github">
          <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/aprilablon/mvp">
            <img className="icon" alt="github.com/aprilablon/mvp" src="/assets/github.png" />
            <p className="github-address">github.com/aprilablon/mvp</p>
          </a>
        </div>
        <div id="nav-dots">
          <div style={this.state.dotStatus[0]} onClick={() => this.selectPanel(0)} className="dot"></div>
          <div style={this.state.dotStatus[1]} onClick={() => this.selectPanel(1)} className="dot"></div>
          <div style={this.state.dotStatus[2]} onClick={() => this.selectPanel(2)} className="dot"></div>
          <div style={this.state.dotStatus[3]} onClick={() => this.selectPanel(3)} className="dot"></div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6" onClick={this.clickPrevious}>
            <img className="app-mock" alt={this.state.alts[this.state.panel]} src={this.state.imgs[this.state.panel]} />
          </div>
          <div className="col-xs-12 col-sm-6" onClick={this.clickNext}>
            <p className="panel-title">{this.state.titles[this.state.panel]}</p>
            <p className="panel-description">{this.state.descriptions[this.state.panel]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rocket;
