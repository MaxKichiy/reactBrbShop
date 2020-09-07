import * as actionTypes from '../actions/actionTypes';
import { setLoaded } from './news';
import axios from 'axios';

export const fetchPortfolios = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get('https://reactbrbshop.firebaseio.com/portfolio.json')
    .then(({ data }) => dispatch(setPortfolios(data)));
};

export const setPortfolios = (data) => ({
  type: actionTypes.FETCH_PORTFOLIOS,
  payload: data,
});
