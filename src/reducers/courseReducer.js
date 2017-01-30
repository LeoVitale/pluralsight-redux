import * as types from '../actions/actionTypes';
const courseReducerInitialState = [];
const courseReducer = (state = courseReducerInitialState, action) => {
  switch (action.type) {
    case types.CREATE_COURSE:
      //debugger;
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
};

export default courseReducer;