export default (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload],
        singleScore: 0
      }
    case "ADD_SINGLE_SCORE": 
      return {
        ...state,
        singleScore: action.payload
      }
    case "MINUS_SINGLE_SCORE":
      return {
        ...state,
        singleScore: action.payload
      }
    default: 
      return state;
  };
};
