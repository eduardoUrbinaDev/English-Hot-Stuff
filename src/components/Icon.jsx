import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheck,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalState';

const Icon = () => {
  const [iconNumber, setIconNumber] = useState(0);
  const icons = [{ic: faCircle, color: ""}, {ic: faCheck, color: "green"}, {ic: faTimes, color: "red"}]
  const { singleScore, addScore, minusScore } = useContext(GlobalContext);

  const changeIcon = () => {
    if (iconNumber === 0) {
      addScore(singleScore);
    } else if (iconNumber === 1) {
      minusScore(singleScore);
    }
    if (iconNumber < 2)
      setIconNumber(iconNumber + 1);
    else 
      setIconNumber(0);
  };

  return (
    <div style={{color: icons[iconNumber].color}}>
      <FontAwesomeIcon icon={ icons[iconNumber].ic} size="2x" onClick={changeIcon}/>
    </div>
  );
}

export default Icon;
