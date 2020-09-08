import * as actionType from '../actions/actionTypes';

const initialState = {
  facts: [],
};

const factReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_FACTS:
      return {
        ...state,
        facts: action.payload,
      };
    default:
      return state;
  }
};

export default factReducer;
