import { useState } from "react";

const GuessInput = ({ handleSubmitGuess }) => {
  const [inputGuess, setInputGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSubmitGuess(inputGuess.toUpperCase());
    setInputGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">
        Your guess must consist of (5) five <strong>letters</strong>:
      </label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={inputGuess}
        pattern="[a-zA-ZñÑ]{5}"
        autoComplete="off"
        style={{ textTransform: "uppercase" }}
        onChange={(event) => {
          setInputGuess(event.target.value);
        }}
        required
      />
    </form>
  );
};

export default GuessInput;
