import {
  RECEIVE_USER,
  RECEIVE_INITIALIZING,
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

export function setUser(user) {
  return {
    type: RECEIVE_USER,
    user,
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
