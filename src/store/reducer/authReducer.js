import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {signUpRequest, signUpResponse, signInRequest, signInResponse, signOut} from "../action/auth";

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
}, {loading: false});

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
  },
  [signOut] (state, action) {
    return {
      ...state,
      token: null,
      userId: null
    }
  }
}, {userId: null, token: null});

const error = handleActions({
  [signUpResponse]: {
    next(){
      return null;
    },
    throw(state, action) {
      return {
        ...state, message: action.payload.response.data.error.message
      }
    }
  },
  [signInResponse]: {
    next(){
      return null;
    },
    throw(state, action) {
      return {
        ...state, message: action.payload.response.data.error.message
      }
    }
  },
}, {message: null});
export default combineReducers({
  request,
  response,
  error
})

