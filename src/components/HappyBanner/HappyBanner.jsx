function HappyBanner({ guessCount }) {
  return (
    <div className="happy-banner">
      <p>
        <strong>Congratulations!</strong> You got it in
        <strong> {guessCount} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
