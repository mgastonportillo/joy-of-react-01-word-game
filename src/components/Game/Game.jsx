import { useState } from "react";
import { sample } from "../../utils/utils";
import { checkGuess } from "@/utils/game-helpers";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "@/constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import ResultBanner from "../ResultBanner/ResultBanner";

const answer = sample(WORDS);

const Game = () => {
  const [guessList, setGuessList] = useState([]);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleCorrectGuess = (guess) => {
    let correctCount = 0;

    const checkArray = checkGuess(guess, answer);
    checkArray.map(({ status }) => {
      if (status === "correct") {
        correctCount += 1;
      }
    });

    if (correctCount === 5) {
      setCorrectGuess(true);
    }
  };

  const handleGameOver = () => {
    if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
  };

  const handleSubmitGuess = (guess) => {
    setGuessList([...guessList, guess]);
    handleCorrectGuess(guess);
    handleGameOver();
  };

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameOver={gameOver}
        correctGuess={correctGuess}
      />
      {(correctGuess || gameOver) && (
        <ResultBanner
          guessCount={guessList.length}
          correctGuess={correctGuess}
          answer={answer}
        />
      )}
    </>
  );
};

export default Game;
