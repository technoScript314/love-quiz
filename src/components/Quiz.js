import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Quiz = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    setShowQuestion(false);
  };

  const handleExited = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setShowQuestion(true);
    } else {
      onQuizComplete(score + 1);
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <TransitionGroup>
        {showQuestion && (
          <CSSTransition
            key={currentQuestionIndex}
            timeout={500}
            classNames="fade"
            onExited={handleExited}
          >
            <div>
              <h2>{question.question}</h2>
              <img
                src={question.image}
                alt="Related to the question"
                className="quiz-image"
              />
              <div id="answers">
                {question.answers.map((answer, index) => (
                  <button key={index} onClick={() => handleAnswerClick(index)}>
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Quiz;
