import React, {useState} from "react";
import "./App.css";

//imags
import cardBack from './images/CardBack.jpg'
import cards from './data';

//components
import CardList from './components/CardList'


function App() {

  // const [cardImage, setCardImage] = useState(cardBack)
  // const [defficulty, setDefficulty] = useState('')
  // const [playerMode, setPlayerMode] = useState('')

  return (
  <div className="App border my-5">
    <div className="container">
      <div className="row">
        {/* 1 */}
        <div className="col-3 my-1">
          {/* 2 */}
          <img
            className="mx-auto"
            src={cardBack}
            //   used percentages instead of pixels to be responsive with the screen size
            height="100%"
            width="100%"
            key="back"
          />
          {/* 3 */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
