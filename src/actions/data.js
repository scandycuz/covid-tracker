import {RECEIVE_COVID_DATA, RECEIVE_DATA_LOADING} from './types';

export function setCovidData(daily) {
  return {
    type: RECEIVE_COVID_DATA,
    daily,
  };
}

export function setLoading(loading) {
  return {
    type: RECEIVE_DATA_LOADING,
    loading,
  };
}
