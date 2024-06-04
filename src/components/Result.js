import React, { useState } from "react";
import Gift from "./Gift";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const isPoemUnlocked = score >= totalQuestions / 2;
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [showResultContent, setShowResultContent] = useState(true);

  const onGiftOpen = () => {
    setShowResultContent(false);
  };

  return (
    <div className="result">
      <TransitionGroup component={null}>
        {showResultContent ? (
          <CSSTransition
            key="result"
            timeout={500}
            classNames="fade"
            onExited={() => setIsGiftOpen(true)}
          >
            <div>
              <h2>
                Tu calificación: {score}/{totalQuestions}
              </h2>
              <img
                src="/images/2.jpg"
                alt="Celebration"
                className="quiz-image"
              />
              {isPoemUnlocked ? (
                <div>
                  <p>
                    Parece ser que sí me quieres! Yo te amo demasiado, aquí está
                    tu regalo, lo confeccioné para ti, ahora puedes abrirlo ❤️
                  </p>
                  <button onClick={onGiftOpen}>Abrir Regalo</button>
                </div>
              ) : (
                <>
                  <p>
                    No me quieres tanto ☹️ intenta de nuevo para desbloquear tu
                    regalo.
                  </p>
                  <button onClick={restartQuiz}>Volver a intentar</button>
                </>
              )}
            </div>
          </CSSTransition>
        ) : (
          isGiftOpen && (
            <CSSTransition key="gift" timeout={500} classNames="fade">
              <Gift />
            </CSSTransition>
          )
        )}
      </TransitionGroup>
    </div>
  );
};

export default Result;
