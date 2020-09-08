import * as actionTypes from './actionTypes';
import { setLoaded } from './news';
import axios from 'axios';

export const fetchFacts = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get('https://reactbrbshop.firebaseio.com/facts.json')
    .then(({ data }) => dispatch(setFacts(data)));
};

export const setFacts = (facts) => ({
  type: actionTypes.FETCH_FACTS,
  payload: facts,
});
