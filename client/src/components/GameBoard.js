import React, { useState } from "react";

import GuessGame from "./GuessGame";
import GuessReverse from "./GuessReverse";

function GameBoard(props) {
  if (props.gameChoice === "none") {
    return (<></>);
  }
  if (props.gameChoice === "reverse") {
    return <GuessReverse />;
  }
  if (props.gameChoice === "original") {
    return <GuessGame />;
  }
}

export default GameBoard;
