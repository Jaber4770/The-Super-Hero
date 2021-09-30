import React, { useEffect, useState } from 'react';
import Cart from '../components/cart/Cart';
import Singleperson from '../components/singlepersons/Singleperson';
import "./Person.css"
const Person = () => {
    const [persons, setPerson] = useState([]);
    const [addPerson, setAddPerson] = useState([]);

    useEffect(() => {
        fetch('persondata.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, []);

    const handleAddToCart = singlePerson => {
        const addedPerson = [...addPerson, singlePerson];
        setAddPerson(addedPerson);
    }

    return (
        <>
            <div className="person-container">
                <div className="singleperson-container">
                    {
                        persons.map( person => <Singleperson key={person.name} person={person} handleAddToCart={handleAddToCart}></Singleperson>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={addPerson}></Cart>
                </div>
            </div>
        </>
    );
};

export default Person;