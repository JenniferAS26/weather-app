import React, { useState } from "react";
import '@styles/Header.scss';
import Menu from "@components/Menu";

import menu from '@icons/menu.png';
import logo from '@logos/logo.png';
import user from '@icons/user.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="Header">
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
          <li>
            <a href="/">Today</a>
          </li>
          <li>
            <a href="/">Hourly</a>
          </li>
          <li>
            <a href="/">Weekend</a>
          </li>
          <li>
            <a href="/">Monthly</a>
          </li>
        </ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" >
						mail@example.com
					</li>
					<li
						className="navbar-shopping-cart"
					>
						<img src={user} alt="Profile" onClick={handleToggle} />
					</li>
				</ul>
			</div>
      {toggle && <Menu/>}
		</nav>
  );
};

export default Header;
