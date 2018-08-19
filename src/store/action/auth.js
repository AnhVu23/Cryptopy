import * as actionTypes from './actionTypes';
import axios from 'axios';
import {createActions} from 'redux-actions';

export const {
  signUpRequest,
  signUpResponse,
  signInRequest,
  signInResponse,
  logout} = createActions(
    actionTypes.SIGN_UP_REQUEST,
  actionTypes.SIGN_UP_RESPONSE,
  actionTypes.SIGN_IN_REQUEST,
  actionTypes.SIGN_IN_RESPONSE,
  actionTypes.LOG_OUT);

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
};
export const signIn = (email, password) => {
  return dispatch => {
    dispatch(signInRequest());
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBeu1l_YzvzhHg_373vtCGupOIaCj4myfg';
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios.post(url, authData)
      .then(response => {
        dispatch(signInResponse(response.data.localId, response.data.idToken))
        dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(err => {
        dispatch(signInResponse(err.response.data.error))
      })
  }
};
export const signUp = (email, password) => {
  return dispatch => {
    dispatch(signUpRequest());
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBeu1l_YzvzhHg_373vtCGupOIaCj4myfg';
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios.post(url, authData)
      .then(response => {
        dispatch(signUpResponse(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(err => {
        console.log(err.response.data.error);
        dispatch(signUpResponse(err))
      })
  }
};