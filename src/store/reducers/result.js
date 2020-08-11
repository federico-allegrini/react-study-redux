import * as actionTypes from "../actions/actionTypes";

const initalState = {
  results: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Recommended manipulate the data here
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2,
        }), //Instead of push, concat return new array with the argument concatenated
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        // results: newArray,
        results: updatedArray,
      };
  }
  return state;
};

export default reducer;
