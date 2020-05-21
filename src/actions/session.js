import {
  RECEIVE_USER,
  RECEIVE_INITIALIZING,
  GET_STATE,
  RECEIVE_STATE,
  RECEIVE_SESSION_ERROR,
  SIGN_UP,
  AUTH_CHANGED,
} from 'actions/types';

export function signUp(params) {
  return {
    type: SIGN_UP,
    params,
  };
}

export function authChanged(user) {
  return {
    type: AUTH_CHANGED,
    user,
  };
}

export function getState() {
  return {
    type: GET_STATE,
  };
}

export function setUser(user) {
  return {
    type: RECEIVE_USER,
    user,
  };
}

export function setState(state) {
  return {
    type: RECEIVE_STATE,
    state,
  };
}

export function setInitializing(initializing) {
  return {
    type: RECEIVE_INITIALIZING,
    initializing,
  };
}

export function setSessionError(error) {
  return {
    type: RECEIVE_SESSION_ERROR,
    error,
  };
}
