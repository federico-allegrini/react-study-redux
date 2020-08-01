const initalState = {
  counter: 0,
};

const reducer = (state = initalState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

export default reducer;
