import axios from 'axios';
import * as actionType from './actionTypes';

export const setLoaded = (value) => ({
  type: actionType.SET_LOADED,
  payload: value,
});

export const fetchNews = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get('https://reactbrbshop.firebaseio.com/data.json')
    .then(({ data }) => dispatch(setNews(data)));
};

export const setNews = (news) => ({
  type: actionType.SET_NEWS,
  payload: news,
});
