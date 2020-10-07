import React from "react";

// Components
import SingleplayerScore from "./SingleplayerScore"
import MultiplayerScore from "./MultiplayerScore"

const Score = (props) => {
    if (props.mode==="multi") 
        return <MultiplayerScore score={props.score} playerTurn={props.playerTurn} />;
    return <SingleplayerScore failedFlips={props.failedFlips} />;  
};

export default Score;