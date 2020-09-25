import axios from 'axios';
import { setLoaded } from './news';

export const setOrders = (values, func) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .post(
      'https://reactbrbshop.firebaseio.com/orders.json',
      JSON.stringify(values, null, 2)
    )
    .then((response) => {
      // console.log(response);
      dispatch(setLoaded(true));
      func({ values: '' });
      // dispatch(setSucces());
    });
};
