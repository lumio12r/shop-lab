import React from "react";
import { connect } from 'react-redux';

import { deleteItemFromCart } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, deleteItem }) => {
    const { name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow'>&#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow'>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <span onClick={() => deleteItem(cartItem)} className='remove-button'> &#x2715; </span>
    </div>
    )};



const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItemFromCart(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);