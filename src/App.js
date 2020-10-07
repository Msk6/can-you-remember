import React, {useState} from "react";
import "./App.css";

//imags
import cardBack from './images/CardBack.jpg'
import cards from './data';

//components
import Card from './components/Card'


function App() {

  const cardList = cards.map((card) => {
    return <Card card={card} key={card.id}/>
  })

  // const [cardImage, setCardImage] = useState(cardBack)
  // const [defficulty, setDefficulty] = useState('')
  // const [playerMode, setPlayerMode] = useState('')

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
