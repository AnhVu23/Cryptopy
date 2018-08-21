import * as actionTypes from './actionTypes';
import axios from 'axios';
import {createActions} from 'redux-actions';

export const {
  signUpRequest,
  signUpResponse,
  signInRequest,
  signInResponse,
  signOut} = createActions(
    actionTypes.SIGN_UP_REQUEST,
  actionTypes.SIGN_UP_RESPONSE,
  actionTypes.SIGN_IN_REQUEST,
  actionTypes.SIGN_IN_RESPONSE,
  actionTypes.SIGN_OUT);

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(signOut());
    }, expirationTime * 1000)
  }
};

export const signIn = (email, password, history) => {
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
        dispatch(signInResponse(response.data))
        dispatch(checkAuthTimeout(response.data.expiresIn))
        history.push('/');
      })
      .catch(err => {
        dispatch(signInResponse(err))
      })
  }
};
export const signUp = (email, password, history) => {
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
        history.push('/');
      })
      .catch(err => {
        dispatch(signUpResponse(err))
      })
  }
};