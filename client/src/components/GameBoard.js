import React from "react";

import GuessGame from "./GuessGame";
import GuessReverse from "./GuessReverse";

function GameBoard(props) {
  if (props.gameChoice === "reset") {
    return <></>;
  }
  if (props.gameChoice === "reverse") {
    return <GuessReverse />;
  }
  if (props.gameChoice === "original") {
    return <GuessGame />;
  }
}

export default GameBoard;
