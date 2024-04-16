import { range } from "@/utils/utils";
import { checkGuess } from "@/utils/game-helpers";

const Guess = ({ value, answer }) => {
  let result = [];

  if (typeof value === "string") {
    const checkResult = checkGuess(value, answer);
    checkResult.map(({ status }) => result.push(status));
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${result && result[num]}`}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
};

export default Guess;
