import React from "react";
import Guess from "../Guess";
function GuessResult({ value }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {value?.split("").map((l, i) => (
          <Guess letter={l} />
        ))}
      </p>
    </div>
  );
}

export default GuessResult;
