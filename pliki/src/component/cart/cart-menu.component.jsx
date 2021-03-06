import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions'
import './cart-menu.styles.scss';

const CartMenu = ({ cartItems, history, dispatch }) => (
    <div className='cart-menu'>
        <div className='cart-items'>
                {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
            ))
                ) : (
            <span className='empty'>Your cart is empty</span>
            
)}
        </div>
        <Button 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCart());
            }}
        > 
            GO TO CHECKOUT 
        </Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartMenu));