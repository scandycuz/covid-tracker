import {
  RECEIVE_USER,
  RECEIVE_STATE,
  RECEIVE_INITIALIZING,
  RECEIVE_SESSION_ERROR,
} from 'actions/types';

const initialState = {
  user: null,
  state: {},
  initializing: true,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        user: action.user,
      };
    case RECEIVE_STATE:
      return {
        ...state,
        state: action.state,
      };
    case RECEIVE_INITIALIZING:
      return {
        ...state,
        initializing: action.initializing,
      };
    case RECEIVE_SESSION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default: {
      return state;
    }
  }
}
