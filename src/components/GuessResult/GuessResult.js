import React from "react";

function GuessResult({ value }) {
  return (
    <div className="guess-results">
      <p className="guess">{value} </p>
    </div>
  );
}

export default GuessResult;
