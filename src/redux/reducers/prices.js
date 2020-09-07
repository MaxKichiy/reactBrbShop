import * as actionTypes from '../actions/actionTypes';

const initialState = {
  prices: [],
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRICES:
      return {
        ...state,
        prices: action.payload,
      };
    default:
      return state;
  }
};

export default priceReducer;
