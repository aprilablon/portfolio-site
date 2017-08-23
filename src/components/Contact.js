import React from 'react';

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
      <div>
        Contact Me!
      </div>
    );
  }
}

export default Contact;
