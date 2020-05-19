import {RECEIVE_USER, RECEIVE_INITIALIZING} from 'actions/types';

const initialState = {
  user: null,
  initializing: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        user: action.user,
      };
    case RECEIVE_INITIALIZING:
      return {
        ...state,
        initializing: action.initializing,
      };
    default: {
      return state;
    }
  }
}
