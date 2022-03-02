import React, { useState } from "react";

import "./App.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
  const [gameChoice, setGameChoice] = useState("reset");

  const userInputHandler = (evt) => {
    evt.preventDefault();
    setGameChoice(evt.target.value);
  };

  return (
    <div className="container">
      <Header />
      
      <form className="input-form">
        <button onClick={userInputHandler} value="original">
          Original
        </button>
        <button onClick={userInputHandler} value="reverse">
          Reverse
        </button>
        <button onClick={userInputHandler} value="reset">
          Reset
        </button>
      </form>
      {<GameBoard gameChoice={gameChoice} />}
    </div>
  );
}

export default App;
