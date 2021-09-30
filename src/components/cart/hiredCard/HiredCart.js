import React from 'react';
import "./HiredCard.css"

const HiredCart = (props) => {
    const {name, img} = props.hired
    // hired person showing in the UI
    return (
        <div className="addedPerson">
            <h4>{name}</h4>
            <img className="img-size" src={img} alt=""/>
        </div>
    );
};

export default HiredCart;