import React from 'react';
import '../styles/Bandwith.css';

class Bandwith extends React.Component {
  render() {
    return (
      <div id="bandwith-app">
        <p>Github repo</p>
        <img alt="bandwith-home" src="/assets/bandwith-mocks/bandwithmock_home.jpeg" />
        <img alt="bandwith-profile" src="/assets/bandwith-mocks/bandwithmock_profile.jpg" />
        <img alt="bandwith-matches" src="/assets/bandwith-mocks/bandwithmock_matches.jpg" />
        <img alt="bandwith-chat" src="/assets/bandwith-mocks/bandwithmock_chat.jpeg" />
      </div>
    );
  }
}

export default Bandwith;
