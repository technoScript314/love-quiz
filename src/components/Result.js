import React from "react";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const isPoemUnlocked = score >= totalQuestions / 2;
  return (
    <div className="result">
      <h2>
        Your Score: {score}/{totalQuestions}
      </h2>
      {isPoemUnlocked ? (
        <div>
          <p>Congratulations! You've unlocked the poem!</p>
          <p>
            Your Poem: <i>Your beautiful poem here</i>
          </p>
        </div>
      ) : (
        <p>Try again to unlock the poem.</p>
      )}
      <button onClick={restartQuiz}>Retry Quiz</button>
    </div>
  );
};

export default Result;
