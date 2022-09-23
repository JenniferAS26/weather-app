import React from 'react';
import '@styles/CreateAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
				<div className="CreateAccount-container">
					<FontAwesomeIcon icon={faUmbrella} className="logo" />
					<h1 className="title">My account</h1>
					<form action="/" className="form">
						<div>
							<label for="name" className="label">Name</label>
							<input type="text" id="name" placeholder="Laura" className="input input-name" />
							<label for="email" className="label">Email</label>
							<input type="text" id="email" placeholder="email@example.com" className="input input-email" />
							<label for="password" className="label">Password</label>
							<input type="password" id="password" placeholder="*********" className="input input-password" />
						</div>
						<input type="submit" value="Create" className="primary-button login-button" />
					</form>
				</div>
		</div>
  );
};

export default CreateAccount;