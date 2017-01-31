import * as types from '../actions/actionTypes';
const courseReducerInitialState = [];
const courseReducer = (state = courseReducerInitialState, action) => {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      //debugger;
      return action.courses;
    default:
      return state;
  }
};

export default courseReducer;