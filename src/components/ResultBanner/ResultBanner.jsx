const messageByResult = {
  win: (guessCount) => (
    <p>
      <strong>Congratulations!</strong> You got it in
      <strong> {guessCount} guesses</strong>.
    </p>
  ),
  loss: (answer) => (
    <p>
      Kudos for trying. The correct answer was <strong>{answer}</strong>.
    </p>
  ),
};

function ResultBanner({ guessCount, correctGuess, answer }) {
  return (
    <div className={`${correctGuess ? "happy" : "sad"} banner`}>
      {correctGuess
        ? messageByResult.win(guessCount)
        : messageByResult.loss(answer)}
    </div>
  );
}

export default ResultBanner;
