import React from "react";

import { connect } from 'react-redux';

import Button from "../button/button.component";
import { addToCart } from "../../redux/cart/cart.actions";

import './collection-item.styles.scss';

const CollectionItem = ({ item, addToCart }) => {
    const { name, price, imageUrl } = item;
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button onClick={() => addToCart(item)} inverted> Add to cart </Button>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);