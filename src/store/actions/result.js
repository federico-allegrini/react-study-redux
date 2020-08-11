import * as actionTypes from "./actionTypes";

// Sync Action
export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

// Async Action
export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
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
