import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />;

    // const totalPerson = ;

    let total = 0;

    for(const personSalary of cart){
        total = total + personSalary.Salary;
    }

    return (
        <div className="order-style">
            <h2>Order Summary {icon}</h2>
            <p>Items ordered:{cart.length}</p>
            <p>Total:$ {total}</p>
        </div>
    );
};

export default Cart;