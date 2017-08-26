import React from 'react';
import nodemailer from 'nodemailer';
import '../styles/Contact.css';
import aws from'aws-sdk';

// not going to work on the frontend 
// need to create back end
aws.config.loadFromPath('config.json');

class Contact extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      first: '',
      last: '',
      email: '',
      subject: '',
      message: ''
    };
    
    this.sendEmail = this.sendEmail.bind(this);
    this.registerInput = this.registerInput.bind(this);
  }
  
  sendEmail() {
    console.log('button click: ', this.state);
    
    // create Nodemailer SES transporter
    let transporter = nodemailer.createTransport({
        SES: new aws.SES({
            apiVersion: '2010-12-01'
        })
    });
    
    // send some mail
    transporter.sendMail({
        from: 'sender@example.com',
        to: 'ablonapril@gmail.com',
        subject: 'Message',
        text: 'I hope this message gets sent!',
        ses: { // optional extra arguments for SendRawEmail
            Tags: [{
                Name: 'tag name',
                Value: 'tag value'
            }]
        }
    }, (err, info) => {
        console.log('did not work');
        console.log(info.envelope);
        console.log(info.messageId);
    });
  }

  registerInput(event) {
    let updateObj = {};
    updateObj[event.target.name] = event.target.value;
    this.setState(updateObj);
  }

  render() {
    return (
      <div id="contact">
        <p className="contact-title">Say Hi 👋</p>
        <div className="row connect-row">
          <p className="subtitle">Connect: </p>
          <a target="_blank" href="https://www.linkedin.com/in/aprilablon">
            <img className="icon" alt="linkedin.com/in/aprilablon" src="/assets/linkedin.svg" />
          </a>
          <a target="_blank" href="https://twitter.com/aprilablon">
            <img className="icon" alt="@aprilablon" src="/assets/twitter.png"/>
          </a>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-3 col-sm-offset-3">
            <input type="text" placeholder="First" name="first" onChange={(event) => this.registerInput(event)} />
          </div>
          <div className="col-xs-12 col-sm-3">
            <input type="text" placeholder="Last" name="last" onChange={(event) => this.registerInput(event)} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <input type="text" placeholder="Email" name="email" onChange={(event) => this.registerInput(event)} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <input type="text" placeholder="Subject" name="subject" onChange={(event) => this.registerInput(event)} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <textarea type="text" rows="8" placeholder="Message" name="message" onChange={(event) => this.registerInput(event)} />
          </div>
        </div>
        <div className="row button-row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <button onClick={this.sendEmail}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
