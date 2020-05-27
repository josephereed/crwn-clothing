import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import logo from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors/user.selectors';
import { selectCartHidden } from '../../redux/selectors/cart.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.styles.jsx';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logo} alt="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionDiv>
          <OptionLink
            className="option"
            to="/shop"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            SHOP
          </OptionLink>
        </OptionDiv>
        <OptionDiv>
          <OptionLink
            className="option"
            to="/contact"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            CONTACT
          </OptionLink>
        </OptionDiv>

        {currentUser ? (
          <OptionDiv>
            <OptionLink
              to=" "
              className="option"
              onClick={() => auth.signOut()}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              SIGN OUT
            </OptionLink>
          </OptionDiv>
        ) : (
          <OptionDiv>
            <OptionLink
              className="option"
              to="/signin"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              SIGN IN
            </OptionLink>
          </OptionDiv>
        )}
        <OptionDiv>
          <CartIcon />
        </OptionDiv>
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
