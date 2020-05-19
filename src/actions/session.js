import {RECEIVE_USER, RECEIVE_INITIALIZING, AUTH_CHANGED} from 'actions/types';

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
