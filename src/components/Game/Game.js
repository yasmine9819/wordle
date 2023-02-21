import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput";
import GuessResult from "../GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const addNewGuess = (currentGuesses, addedGuess) => {
    const guess = { id: guesses.length + 1, value: addedGuess };
    const newGuesses = [...currentGuesses, guess];
    setGuesses(newGuesses);
  };

  return (
    <>
      <GuessResult guesses={guesses} />
      <TextInput guesses={guesses} addGuess={addNewGuess}></TextInput>
    </>
  );
}

export default Game;
