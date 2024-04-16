import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "@/constants";
import { range } from "@/utils/utils";

const GuessResult = ({ guessList, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guessList[num]} answer={answer} />
      ))}
    </div>
  );
};

export default GuessResult;
