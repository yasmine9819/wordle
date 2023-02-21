import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {range(6).map((i) => (
        <Guess key={i} value={guesses[i]?.value} />
      ))}
    </div>
  );
}

export default GuessResult;
