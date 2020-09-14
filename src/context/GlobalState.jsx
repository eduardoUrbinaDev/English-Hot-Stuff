import React, { createContext, useReducer } from "react";

const initialState = {
  students: [
    {
    id: 1,
    name: 'Eduardo Urbina',
    score: 10
    }
  ]
};

export const GlobalProvider = ({ children }) => {

};

export const GlobalContext = createContext(initialState);

