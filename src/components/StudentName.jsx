import React, { useState } from 'react';
import './styles.css';

const StudentName = () => {
  const [value, setValue] = useState('');
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  
  return (
    <form className="student" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <h3 className="score">{score}</h3>
      <button>Save</button>
    </form>
  )
};

export default StudentName;
