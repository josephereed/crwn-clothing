import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/crown.svg';

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link class="logo-container" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link
              className="option"
              to="/shop"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link className="option" to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
