import React from 'react';
import "./Singleperson.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Singleperson = (props) => {
    const { name, age, img, Homeland, presentLocation, Profession, Company, Salary } = props.person;

    // fontawesome icon 
    const icon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="person-cart-style">
            <div className="person-height">
                <img src={img} alt="Hero of Programming hero."/>
                <h4>Name: {name}</h4>
                <p>Age: {age}</p>
                <p>Homeland: {Homeland}</p>
                <p>Present location: {presentLocation}</p>
                <p>Profession: {Profession}</p>
                <p>Company: {Company}</p>
                <p>Salary: ${Salary}</p>
            </div>
            <div>
                <button className="button-style" onClick={() => props.handleAddToCart(props.person)}>{icon} Add to cart</button>
            </div>
        </div>
    );
};

export default Singleperson;
