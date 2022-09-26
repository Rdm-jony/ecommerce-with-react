import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ clickHandler, product }) => {
    // console.log(props.product)
    const { name, price, img, ratings, category } = product;
    return (
        <div className='product-container'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <div className='first-info'>
                    <h5>{name}</h5>
                    <p>Price: ${price}</p>
                </div>
                <div className='second-info'>
                    <p><small>Category: {category}</small></p>
                    <p><small>Rating: {ratings} star</small></p>
                </div>
            </div>
            <button onClick={() => clickHandler(product)} className='add-cart-btn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;