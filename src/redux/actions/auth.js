import * as actionTypes from '../actions/actionTypes';
import { auth } from '../../firebase';

export const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
export const logout = () => {
  return auth.signOut();
};
export const updateEmail = (currentUser, email) => {
  return currentUser.updateEmail(email);
};
export const updatePassword = (currentUser, password) => {
  return currentUser.updatePassword(password);
};
export const resetPassword = (email) => {
  return auth.sendPasswordResetEmail(email);
};

export const setActive = (user) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});
