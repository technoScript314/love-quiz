import React, { useState } from "react";

const Quiz = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      onQuizComplete(score + 1);
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <h2>{question.question}</h2>
      <div id="answers">
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(index)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
