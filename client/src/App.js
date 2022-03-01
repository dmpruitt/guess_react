import React, { useState } from "react";

import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [gameChoice, setGameChoice] = useState("reset");

  const userInputHandler = (evt) => {
    evt.preventDefault();
    setGameChoice(evt.target.value);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <h2>Please choose game you would like to play</h2>
      <form>
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
