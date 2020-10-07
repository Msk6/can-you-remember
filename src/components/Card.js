import React from 'react';
import CardBack from '../images/CardBack.jpg'

const Card = (props) => {
    /* 1 */
    return (
    <div className="col-3 my-1">
    {/* 2 */}
    <img
      className="mx-auto"
      src={props.card.front}
      //   used percentages instead of pixels to be responsive with the screen size
      height="100%"
      width="100%"
      key="front"
    />
    {/* 3 */}
  </div>
    )
}

export default Card;