import React from 'react';

// components
import Card from './Card'

const CardList = (props) => {

    const cardList = props.data.map((image) => {
        return <Card image={image.front} />
    })

    return (
        <div>
            <div className="container row">
                {cardList}
            </div>
        </div>
    )
}

export default CardList;