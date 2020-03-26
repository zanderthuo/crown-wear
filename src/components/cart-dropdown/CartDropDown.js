import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import{ withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartDropDown.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items"> 
            {
                cartItems.length ?(
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
                ):(
            <span className="empty-message">Your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={() =>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

//Make our cart component not to rerender
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));