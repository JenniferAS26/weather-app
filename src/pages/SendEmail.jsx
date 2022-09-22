import React from 'react';
import '@styles/SendEmail.scss';
import iemail from '@icons/email.svg';
import logo from '@logos/logo.png';

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="SendEmail-container">
        <img className="logo" src={logo} alt="Logo"/>
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <img src={iemail} alt="email"/>
        </div>
        <button className="primary-button login-button"
        >Login</button>
        <p className="resend">
          <span>Didn't recieve the email</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;