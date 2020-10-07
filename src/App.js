import React, { useState } from "react";
import "./App.css";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";
import Home from "./components/Home"

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [mode, setMode] = useState(null)

  const page = () => {
    if (difficulty) {return <Game difficulty={difficulty} mode={mode} />}
    if (mode) {return <Difficulty setDifficulty={setDifficulty} />}
    return <Home setMode={setMode} />
  }

  return (
    <div className="App border my-5">
      {page()}
      <div className="row">
        <div className="col-3">
          <button className="btn btn-danger mb-3" 
          onClick={() => {setMode(null); setDifficulty(null);}} >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
