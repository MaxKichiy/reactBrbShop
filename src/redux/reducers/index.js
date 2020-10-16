import newsReducer from './news';
import reviewsReducer from './reviews';
import { combineReducers } from 'redux';
import priceReducer from './prices';
import portFolioReducer from './portfolio';
import factReducer from './fact';
import authReducer from './auth';
// import formReducer from './form';

const rootReducer = combineReducers({
  news: newsReducer,
  reviews: reviewsReducer,
  prices: priceReducer,
  portfolio: portFolioReducer,
  facts: factReducer,
  auth: authReducer,
  // form: formReducer,
});

export default rootReducer;
