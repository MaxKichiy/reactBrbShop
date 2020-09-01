import newsReducer from './news';
import reviewsReducer from './reviews';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  news: newsReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
