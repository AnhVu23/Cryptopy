import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {signUpRequest, signUpResponse, signInRequest, signInResponse} from "../action/auth";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const request = handleActions({
  [signUpRequest] (state) {
    return {
      ...state, loading: true
    }
  },
  [signUpResponse] (state) {
    return {
      ...state, loading: false
    }
  },
  [signInRequest] (state) {
    return {
      ...state, loading: true
    }
  },
  [signInResponse] (state) {
    return {
      ...state, loading: false
    }
  }
}, initialState);

const response = handleActions({
  [signUpResponse] (state, action) {
    return {
      ...state,
      token: action.payload.idToken,
      userId: action.payload.localId
    }
  },
  [signInResponse] (state, action) {
    return {
      ...state,
      token: action.payload.idToken,
      userId: action.payload.localId
    }
  }
}, initialState);

const error = handleActions({
  [signUpResponse]: {
    next(){
      return null;
    },
    throw(state, {payload}) {
      return {
        ...state, error: payload
      }
    }
  },
  [signInResponse]: {
    next(){
      return null;
    },
    throw(state, {payload}) {
      return {
        ...state, error: payload
      }
    }
  },
});
export default combineReducers({
  request,
  response,
  error
})