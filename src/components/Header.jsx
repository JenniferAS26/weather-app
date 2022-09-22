import React, { useState } from "react";
import '@styles/Header.scss';
import Menu from "@components/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faUserPen, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="Header">
      <FontAwesomeIcon icon={faBarsStaggered} className="menu" />
			<div className="navbar-left">
        <FontAwesomeIcon icon={faUmbrella} className="nav-logo" />
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
						className="navbar-account"
					>
            <FontAwesomeIcon icon={faUserPen} onClick={handleToggle} className='iconUser' />
					</li>
				</ul>
			</div>
      {toggle && <Menu/>}
		</nav>
  );
};

export default Header;
