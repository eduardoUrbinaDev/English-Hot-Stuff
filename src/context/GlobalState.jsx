import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  singleScore: 0,
  students: [
    {
      id: 0,
      name: 'Eduardo Urbina',
      score: 10
    }
  ]
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addStudent(student) {
    dispatch({
      type: "ADD_STUDENT",
      payload: student
    });
  };

  function addScore(score) {
    dispatch({
      type: "ADD_SINGLE_SCORE",
      payload: score + 1
    });
  }

  function minusScore(score) {
    dispatch({
      type: "MINUS_SINGLE_SCORE",
      payload: score - 1
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        singleScore: state.singleScore,
        students: state.students,
        addStudent,
        addScore,
        minusScore
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export const GlobalContext = createContext(initialState);

