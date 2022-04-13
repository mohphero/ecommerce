import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping  * product.quantity;
    }
    const tax = total  / 100 * 10;
    const grandTotal = total + shipping + parseInt(tax);
    return (
        <div>
            <h3>This is cart : {quantity}</h3>
            <div>Total Price : {total}</div>
            <div>Total Shopping : {shipping} </div>
            <div>Tax : {tax.toFixed(2)}</div>
            <div>Grand Total : {grandTotal}</div>
        </div>
    );
};

export default Cart;