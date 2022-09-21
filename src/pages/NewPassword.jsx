import React from 'react';
import '@styles/NewPassword.scss';
import logo from '@logos/logo.svg';

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img className="logo" src={logo} alt="Logo"/>
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for you account</p>
        <form action="/" className="form">
          <label for="password" className="label">Password</label>
          <input className="input input-password" type="password"  placeholder="*********" id="password"/>
          <label for="new-password" className="label">Re-enter password</label>
          <input className="input input-password" type="password" id="new-password" placeholder="*********"/>
          <input className="primary-button login-button" type="submit" value="Confirm"/>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;