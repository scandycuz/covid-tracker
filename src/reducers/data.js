import {RECEIVE_COVID_DATA, RECEIVE_DATA_LOADING} from 'actions/types';

const initialState = {
  loading: true,
  daily: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COVID_DATA:
      return {
        ...state,
        daily: action.daily,
      };
    case RECEIVE_DATA_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default: {
      return state;
    }
  }
}
