import React, { useEffect, useState } from 'react';
import Cart from '../components/cart/Cart';
import Singleperson from '../components/singlepersons/Singleperson';
import "./Person.css"
const Person = () => {
    // usestate of loading person data
    const [persons, setPerson] = useState([]);
    // usestate of adding person 
    const [addPerson, setAddPerson] = useState([]);
    // loadData by useeffect 
    useEffect(() => {
        fetch('persondata.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, []);

    // handling added person
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
                {/* add to cart */}
                <div className="cart-container">
                    <Cart key={addPerson.name} cart={addPerson}></Cart>
                </div>
            </div>
        </>
    );
};

export default Person;