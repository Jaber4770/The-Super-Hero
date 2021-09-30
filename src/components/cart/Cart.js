import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import HiredCart from './hiredCard/HiredCart';

const Cart = (props) => {
    const {cart} = props;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />;
    let total = 0;
    for(const personSalary of cart){
        total = total + personSalary.Salary;
    }

    return (
        // showing order summary in the UI
        <div>
            <div className="order-style">
                <h2>Order Summary {icon}</h2>
                <h5>Items ordered:{cart.length}</h5>
                <h5>Total:$ {total} USD</h5>
            </div>
            <div className="hired-section">
                {/* this is hired section, sending data using map */}
                <h3>Hired Person!</h3>
                    {
                        cart.map(hiredPerson => <HiredCart key={hiredPerson.name} hired={hiredPerson}></HiredCart>)
                    }
            </div>
        </div>
    );
};

export default Cart;