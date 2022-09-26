import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let countItem = 0;
    let quantity = 0;
    for (const product of cart) {
        countItem += product.quantitiy;
        quantity = product.quantitiy;
        totalPrice += product.price * quantity;
        totalShipping += product.shipping;
        tax = parseFloat((totalPrice * 0.1).toFixed(2));
        grandTotal = totalPrice + totalShipping + tax;
    }
    return (
        <div className='cart-container'>
            <h3>Order summary</h3>
            <h4>Scelecte items: {countItem}</h4>
            <h4>Total Price: ${totalPrice}</h4>
            <h4>Total Shipping charge: ${totalShipping}</h4>
            <h4>Tax: ${tax.toFixed(2)}</h4>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Cart;