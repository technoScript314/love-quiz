import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

const questions = [
  {
    question: "Where was our first date?",
    answers: ["Park", "Cinema", "Cafe", "Beach"],
    correct: 2,
  },
  {
    question: "What is my favorite color?",
    answers: ["Blue", "Green", "Red", "Yellow"],
    correct: 1,
  },
  // Add more questions here
];

function App() {
  const [gameState, setGameState] = useState("homepage");
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setGameState("quiz");
    setScore(0);
  };

  const onQuizComplete = (finalScore) => {
    setScore(finalScore);
    setGameState("result");
  };

  const restartQuiz = () => {
    setGameState("homepage");
  };

  return (
    <div className="App">
      {gameState === "homepage" && <Homepage startQuiz={startQuiz} />}
      {gameState === "quiz" && (
        <Quiz questions={questions} onQuizComplete={onQuizComplete} />
      )}
      {gameState === "result" && (
        <Result
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
