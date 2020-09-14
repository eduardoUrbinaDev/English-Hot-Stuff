import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Students = () => {

  const { students } = useContext(GlobalContext);
  return (
    <div className="cardAlignment">
      {
        students.map((index)=> (
          <h3>{index.name} {index.score}</h3>
        ))
      }
    </div>
  )
};  

export default Students;