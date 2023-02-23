import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          className={`cell ${
            checkGuess(value, answer) ? checkGuess(value, answer)[i].status : ""
          }`}
          key={i}
        >
          {value ? value.split("")[i] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
