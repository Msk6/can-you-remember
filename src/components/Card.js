import React, {useState} from 'react';

//image
import cardBack from '../images/CardBack.jpg';

//animation
import ReactCardFlip from "react-card-flip";

const Card = (props) => {

    const [flipped, changeFlip] = useState(false);  
    
    const handleFlip = () => {
        if (flipped !== true){
            changeFlip(true)
            props.checkFlipped({ id: props.card.id, changeFlip: changeFlip });
        }
    }

    return (
    <div className="col-3 my-1">
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <img
            className="mx-auto"
            src={cardBack}
            //   used percentages instead of pixels to be responsive with the screen size
            height="100%"
            width="100%"
            key="back"
            onClick={handleFlip}
            />
            <img
            className="mx-auto"
            src={props.card.front}
            //   used percentages instead of pixels to be responsive with the screen size
            height="100%"
            width="100%"
            key="front"
            onClick={handleFlip}
            />
        </ReactCardFlip>
  </div>
    )
}

export default Card;