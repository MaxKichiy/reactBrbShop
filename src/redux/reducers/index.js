import newsReducer from './news';
import reviewsReducer from './reviews';
import { combineReducers } from 'redux';
import priceReducer from './prices';
import portFolioReducer from './portfolio';

const rootReducer = combineReducers({
  news: newsReducer,
  reviews: reviewsReducer,
  prices: priceReducer,
  portfolio: portFolioReducer,
});

export default rootReducer;
