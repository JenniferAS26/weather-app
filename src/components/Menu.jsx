import React from 'react';
import '../styles/Menu.scss'

const Menu = () => {
  return (
    <div className="Menu">
        <ul>
          <li>
            <a href="/">
              My favourites
            </a>
          </li>
          <li>
            <a href="/account">My account</a>
          </li>
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
  );
};

export default Menu;