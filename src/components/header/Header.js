import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import logo from '../../assets/crown.svg';
import CartIcon from '../carticon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => {
  return (
    <div>
      <div className="header">
        <Link className="logo-container" to="/">
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
            <Link
              className="option"
              to="/contact"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              CONTACT
            </Link>
          </li>
          <li>
            {currentUser ? (
              <Link
                to=" "
                className="option"
                onClick={() => auth.signOut()}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                SIGN OUT
              </Link>
            ) : (
              <Link
                className="option"
                to="/signin"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                SIGN IN
              </Link>
            )}
          </li>
            <CartIcon />
        </ul>
      </div>
      { hidden ? (null) : (<CartDropDown />)}
    </div>
  );
};

const mapStateToProps =({user: { currentUser}, cart: {hidden}}) => ({
  currentUser: currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
