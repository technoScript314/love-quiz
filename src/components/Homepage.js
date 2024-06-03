import React from "react";

const Homepage = ({ startQuiz }) => {
  return (
    <div className="homepage">
      <h1>Welcome to Our Love Quiz</h1>
      <p>Let's see how well you know us!</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Homepage;
