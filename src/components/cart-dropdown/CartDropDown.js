import React from 'react';
import CustomButton from '../custombutton/CustomButton';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/selectors/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/actions/cartActions';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {!cartItems.length > 0 ? (
          <span className="empty-message">Your cart is empty</span>
        ) : (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
