import React from 'react';
import CardBack from '../images/CardBack.jpg'

const Card = (props) => {
    
    return (
    <div className="card col-3">
        <div className="card-body">
            <img src={props.image} alt=""/>
        </div>
    </div>
    )
}

export default Card;