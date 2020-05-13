import React from 'react';
import CustomButton from '../custombutton/CustomButton';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/selectors/cart.selectors'

const CartDropDown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.map(cartItem => <CartItem key={ cartItem.id} item={cartItem} />)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}


const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown)
