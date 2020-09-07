import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import { setLoaded } from './news';

export const fetchReviews = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get('https://reactbrbshop.firebaseio.com/reviews.json')
    .then(({ data }) => dispatch(setReviews(data)))
    .then(setLoaded(true));
};

export const setReviews = (revs) => ({
  type: actionTypes.FETCH_REVIEWS,
  payload: revs,
});
