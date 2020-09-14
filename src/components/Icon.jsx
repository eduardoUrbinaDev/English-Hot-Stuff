import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheck,
  faCircle
} from '@fortawesome/free-solid-svg-icons';

const Icon = () => {
  const [iconNumber, setIconNumber] = useState(0);
  const icons = [{ic: faCircle, color: ""}, {ic: faCheck, color: "green"}, {ic: faTimes, color: "red"}]

  const changeIcon = () => {
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
