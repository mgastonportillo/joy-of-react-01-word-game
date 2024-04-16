import { useState } from "react";
import { sample } from "../../utils/utils";
import { checkGuess } from "@/utils/game-helpers";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import HappyBanner from "../HappyBanner/HappyBanner";
import { NUM_OF_GUESSES_ALLOWED } from "@/constants";

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
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {correctGuess && (
        <HappyBanner
          guessCount={guessList.length}
          lost={gameOver}
          won={correctGuess}
        />
      )}
      {gameOver && (
        <p>
          Well... you lost. <strong>It's sad</strong>, but tomorrow will be
          better. Unless you lose tomorrow as well. Then it'll be{" "}
          <strong>very sad</strong>
        </p>
      )}
    </>
  );
};

export default Game;
