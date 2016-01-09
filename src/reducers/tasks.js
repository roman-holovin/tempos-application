import * as ActionTypes from 'constants/actionTypes.js';

const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TASKS_GET:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.TASKS_GET_SUCCESS:
      return {
        ...state,
        list: action.payload.result,
        loading: false,
      };
    default:
      return state;
  }
};
