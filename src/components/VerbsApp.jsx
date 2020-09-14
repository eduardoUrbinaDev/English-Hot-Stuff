import React, { useState } from 'react';
import verbs from '../utils/verbs';
import GradeStudent from './GradeStudent';

const VerbsApp = () => {
  const [verb, setVerb] = useState(0);

  const shuffleVerb = () => {
    const number = Math.floor(Math.random() * verbs.length)
    setVerb(number)
  };

  return (
    <div className="cardAlignment">
      <h3>{verbs[verb]}</h3>
      <button className="button" onClick={shuffleVerb}>Shuffle Verb</button>
      <GradeStudent />
    </div>
  )
};  

export default VerbsApp;