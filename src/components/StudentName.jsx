import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './styles.css';

const StudentName = () => {
  const [value, setValue] = useState('');
  const { addStudent, students, singleScore } = useContext(GlobalContext)

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ id: 1, name: value, score: singleScore });
    console.log(students)
  };
  
  return (
    <form className="student" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <h3 className="score">{singleScore}</h3>
      <button>Save</button>
    </form>
  )
};

export default StudentName;
