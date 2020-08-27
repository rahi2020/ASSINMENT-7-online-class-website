import React from 'react';

const Total = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalAdd = cart.reduce((total, crs) => total + crs.price, 0);
     
    return (
        <div>
            <h4>Course Summary</h4>
            <p>Course added: {cart.length}</p>
            <p>Course Amount: {totalAdd}</p>
            <h3>Total Amount: {totalAdd}</h3>
        </div>
    );
};

export default Total;