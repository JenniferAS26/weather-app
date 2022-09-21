import React from 'react';
import '../styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img className="logo" src="../assets/logos/logo_yard_sale.svg" alt="Logo"/>
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