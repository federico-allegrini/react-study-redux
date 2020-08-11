import * as actionTypes from "./actionTypes";

// Sync Action
export const saveResult = (res) => {
  // Recommended not to manipulate the data here
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

// Async Action
export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // Don't overuse it!
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};
