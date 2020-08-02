const initalState = {
  counter: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        counter: state.counter + action.value,
      };
    case "SUBTRACT":
      return {
        counter: state.counter - action.value,
      };
  }
  return state;
};

export default reducer;
