import * as actionTypes from '../actions/actionTypes';

const initialState = {
  portfolio: [],
};

const portFolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PORTFOLIOS:
      return {
        ...state,
        portfolio: action.payload,
      };

    default:
      return state;
  }
};

export default portFolioReducer;
