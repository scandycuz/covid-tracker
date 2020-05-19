import {RECEIVE_USER, RECEIVE_INITIALIZING} from 'actions/types';

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
