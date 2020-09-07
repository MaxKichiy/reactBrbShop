import * as actionTypes from '../actions/actionTypes';

const initialState = {
  reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
