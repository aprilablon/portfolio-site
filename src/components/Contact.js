import React from 'react';
import '../styles/Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toEmail: '',
      emailMessage: '',
      emailSubject: ''
    };
  }

  sendEmail() {
    
  }

  render() {
    return (
      <div id="contact">
        <div className="row social">
          <img className="icon" alt="linkedin.com/in/aprilablon" src="/assets/linkedin.svg" />
          <img className="icon" alt="github.com/aprilablon" src="/assets/github.png" />
          <img className="icon" alt="@aprilablon" src="/assets/twitter.png"/>
        </div>
      </div>
    );
  }
}

export default Contact;
