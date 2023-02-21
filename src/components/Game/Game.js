import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput";
import GuessResult from "../GuessResult";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

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
      {range(1, 6).map((index) => (
        <GuessResult
          key={guesses[index - 1]?.id}
          value={guesses[index - 1]?.value}
        ></GuessResult>
      ))}

      <TextInput guesses={guesses} addGuess={addNewGuess}></TextInput>
    </>
  );
}

export default Game;
