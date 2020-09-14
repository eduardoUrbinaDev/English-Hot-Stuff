import React, { useState } from 'react';
import './styles.css';
import questions from '../utils/questions';
import GradeStudent from './GradeStudent';

let alreadyAskedQuestions = [];

const QuestionApp = () => {
  const [question, setQuestion] = useState(0);
  
  const shuffleQuestion = () => {
    const number = Math.floor(Math.random() * questions.length);
    try {
      if (!alreadyAskedQuestions.includes(number)) {
        setQuestion(number);
        alreadyAskedQuestions = [number, ...alreadyAskedQuestions];
      } else {
        shuffleQuestion();
      }
    } catch (e) {
      console.error(e);
      alert('Fatal error!')
    }
  };

  return (
    <div className="cardAlignment">
      <h3>{questions[question].question}</h3>
      <h2>{questions[question].answer}</h2>
      <button className="button" onClick={shuffleQuestion}>Shuffle Question</button>
      <GradeStudent />
    </div>
  )
};

export default QuestionApp;
