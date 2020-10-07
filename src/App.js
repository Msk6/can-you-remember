import React, { useState } from "react";
import "./App.css";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";

function App() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className="App border my-5">
      {difficulty ? (
        <Game difficulty={difficulty} />
      ) : (
        <Difficulty setDifficulty={setDifficulty} />
      )}
    </div>
  );
}

export default App;
