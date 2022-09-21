import React from "react";
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo.svg';
import user from '@icons/user.png';

const Header = () => {
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
            <a href="/">7 Days</a>
          </li>
          <li>
            <a href="/">Monthly</a>
          </li>
        </ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">
						mail@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						// onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={user} alt="Profile" />
						{/* {state.cart.length > 0 ? <div>{state.cart.length}</div> : null} */}
					</li>
				</ul>
			</div>
			{/* {toggle && <Menu />}
			{toggleOrders && <MyOrder />} */}
		</nav>
    /*{ <nav>
      <img
        src={menu}
        alt="Icono de menu"
        className="menu"
      />
      <div className="navbar-left">
        <img src={logo} alt="" className="logo" />
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
            <a href="/">7 Days</a>
          </li>
          <li>
            <a href="/">Monthly</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">email@example.com</li>
          <li className="navbar-shopping-cart">
            <img
              src={user}
              alt="Profile"
            />
          </li>
        </ul>
      </div>
    </nav> }*/
  );
};

export default Header;
