import * as actionTypes from './actionTypes';
import axios from 'axios';
import { setLoaded } from './news';

export const auth = (email, password) => (dispatch) => {
  dispatch(setLoaded(false));
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  let url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTlsIsNA0vW3t-gRCyzVCCVO-xlGt_yyo';
  axios.post(url, authData).then((res) => console.log(res));
  dispatch(setLoaded(true));
};
