import React from 'react';
import '../styles/Project.css';

const active = '#E91E63';
const inactive = '#FFB0CA';

class Tribal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panel: 0,
      min: 0,
      max: 3,
      imgs: [
        '/assets/tribal-mocks/tribalmock_play1.jpeg',
        '/assets/tribal-mocks/tribalmock_create.jpeg',
        '/assets/tribal-mocks/tribalmock_start.jpg',
        '/assets/tribal-mocks/tribalmock_play2.jpg'
      ],
      titles: [
        'Crowd-sourced real-time playlist',
        'Be a creator or collaborator',
        'The crowd decides play order',
        'Play perfectly curated playlist'
      ],
      descriptions: [
        'Ever had problems using one persons Spotify',
        'Creator just owns the playlist, saves it for later',
        'Everyone can vote for their favorite songs, changes the order of play',
        'Start the party and play'
      ],
      alts: [
        'tribal-play1',
        'tribal-create',
        'tribal-start',
        'tribal-play2'
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
    let nextPanelValue = this.state.panel - 1;
    this.setState({
      panel: nextPanelValue
    });
  }

  clickNext() {
    if (this.state.panel === this.state.max) {
      return;
    }
    let nextPanelValue = this.state.panel + 1;
    this.setState({
      panel: nextPanelValue
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
          <p id="app-header">Tribal</p>
        </div>
        <div id="visit-div">
          <a target="_blank" rel="noopener noreferrer" href="http://bitly.com/tribal-app">
            <button id="visit-app">Visit</button>
          </a>
        </div>
        <div className="app-github">
          <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/SentinelsOfMagic/tribal">
            <img className="icon" alt="github.com/SentinelsOfMagic/tribal" src="/assets/github.png" />
            <p className="github-address">github.com/SentinelsOfMagic/tribal</p>
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

export default Tribal;
