import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Wrapper from "./Wrapper";
import "./App.css";
import "./Quiz.css";
import "./Result.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const questions = [
  {
    question: "Dónde fue nuestra primera cita?",
    answers: ["La luna", "Galerías", "Starbucks", "Fundidora"],
    correct: 1,
    image: "/images/3.jpg",
  },
  {
    question: "A dónde fuimos de vacaciones por primera vez?",
    answers: ["Acapulco", "Cancún", "Macondo", "Pekín"],
    correct: 1,
    image: "/images/4.jpg",
  },
  {
    question: "Cuál fue nuestro primer concierto juntos?",
    answers: ["Porter Robinson", "Boris Brejcha", "Intocable", "Pal Norte"],
    correct: 2,
    image: "/images/5.jpg",
  },
  {
    question: "Cuál es mi banda favorita?",
    answers: [
      "Angels & Airwaves",
      "blink-182",
      "Los Temerarios",
      "Los Cadetes de Linares",
    ],
    correct: 0,
    image: "/images/6.jpg",
  },
  {
    question:
      "Cuántas veces nos quedamos juntos en un AirBnB? Si no sabes no me quieres",
    answers: ["20", "19", "21", "18"],
    correct: 0,
    image: "/images/7.jpg",
  },
];

function App() {
  const [gameState, setGameState] = useState("homepage");
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Preload images
    questions.forEach((question) => {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}${question.image}`;
    });

    const preloadImages = [
      "/images/1.jpg",
      "/images/2.jpg",
      ...questions.map(
        (question) => `${process.env.PUBLIC_URL}${question.image}`
      ),
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
    <Wrapper>
      <TransitionGroup>
        {gameState === "homepage" && (
          <CSSTransition key="homepage" timeout={500} classNames="fade">
            <Homepage startQuiz={startQuiz} />
          </CSSTransition>
        )}
        {gameState === "quiz" && (
          <CSSTransition key="quiz" timeout={500} classNames="fade">
            <Quiz questions={questions} onQuizComplete={onQuizComplete} />
          </CSSTransition>
        )}
        {gameState === "result" && (
          <CSSTransition key="result" timeout={500} classNames="fade">
            <Result
              score={score}
              totalQuestions={questions.length}
              restartQuiz={restartQuiz}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </Wrapper>
  );
}

export default App;
