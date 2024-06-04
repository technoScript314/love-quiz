import React from "react";

const Homepage = ({ startQuiz }) => {
  return (
    <div className="homepage">
      <h1>Feliz cumpleaños bb</h1>
      <strong>
        <p>A ver si sabes qué onda, si repruebas no hay regalo</p>
      </strong>
      <img
        src={`${process.env.PUBLIC_URL}/images/1.jpg`}
        alt="Us on a date"
        className="quiz-image"
      />
      <button onClick={startQuiz}>Empezar!!</button>
    </div>
  );
};

export default Homepage;
