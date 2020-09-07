import axios from 'axios';
import * as actionTypes from './actionTypes';
import { setLoaded } from './news';

export const fetchPrices = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get('https://reactbrbshop.firebaseio.com/prices.json')
    .then(({ data }) => dispatch(setPrices(data)));
  dispatch(setLoaded(true));
};

export const setPrices = (prices) => ({
  type: actionTypes.FETCH_PRICES,
  payload: prices,
});
