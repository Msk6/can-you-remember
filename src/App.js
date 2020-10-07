import React, {useState} from "react";
import "./App.css";

//imags
import cardBack from './images/CardBack.jpg'
import allCards  from './data';

//components
import Card from './components/Card'

//utils
import {shuffle} from './utils'


function App() {

  const [cards, setCards] = useState(shuffle([...allCards, ...allCards]));

  const cardList = cards.map((card, idx) => {
    return <Card card={card} key={`${card.id}-${idx}`}/>
  })

  return (
  <div className="App border my-5">
    <div className="container">
      <div className="row">
        {cardList}
      </div>
    </div>
  </div>
  )
}

export default App;
