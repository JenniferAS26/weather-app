import React from 'react';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-container">
        <img className="logo" src="https://random.com" alt="Logo" />
        <form action="/" className="form">
          <label for="email" className="label">
            Email address
          </label>
          <input
            className="input input-email"
            type="email"
            placeholder="email@example.com"
            name="email"
          />
          <label for="password" className="label">
            Password
          </label>
          <input
            className="input input-password"
            type="password"
            name="password"
            placeholder="*********"
          />
          <button
            className="primary-button login-button"
            
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button sighup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;