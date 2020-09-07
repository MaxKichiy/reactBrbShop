import newsReducer from './news';
import reviewsReducer from './reviews';
import { combineReducers } from 'redux';
import priceReducer from './prices';

const rootReducer = combineReducers({
  news: newsReducer,
  reviews: reviewsReducer,
  prices: priceReducer,
});

export default rootReducer;
