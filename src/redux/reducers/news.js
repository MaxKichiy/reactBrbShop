import * as actionType from '../actions/actionTypes';

const initialState = {
  news: [],
  isLoaded: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_NEWS:
      return {
        ...state,
        news: action.payload,
        isLoaded: true,
      };
    case actionType.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default newsReducer;
