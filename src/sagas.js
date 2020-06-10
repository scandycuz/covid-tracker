import auth from '@react-native-firebase/auth';
import {takeLatest, put} from 'redux-saga/effects';
import {setLoading, setCovidData} from 'actions/data';
import {
  setUser,
  setInitializing,
  setSessionError,
  setState,
} from 'actions/session';
import {
  LOG_IN,
  SIGN_UP,
  AUTH_CHANGED,
  GET_STATE,
  RECEIVE_STATE,
  RECEIVE_USER,
  RECEIVE_COVID_DATA,
} from 'actions/types';
import Geolocation from '@react-native-community/geolocation';
import Error from 'util/Error';
import API from 'util/API';

export function* startLoading() {
  yield put(setLoading(true));
}

export function* stopLoading() {
  yield put(setLoading(false));
}

export function* stopInitializing() {
  yield put(setInitializing(false));
}

export function* fetchState() {
  try {
    const state = yield getLocation();

    yield put(setState(state));
  } catch (e) {
    console.error(e);
  }
}

export function* fetchCovidData({state}) {
  try {
    const data = yield API.fetchDailyCovidStatistics();
    const json = yield data.json();

    const daily = json.filter(i => i.state === state.shortName);

    yield put(setCovidData(daily));
  } catch (e) {
    console.error(e);
  }
}

export function* onLogin({params: {email, password}}) {
  try {
    yield auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    yield put(setSessionError(Error.parseFirebaseError(e)));
  }
}

export function* onSignup({params: {email, password}}) {
  try {
    yield auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    yield put(setSessionError(Error.parseFirebaseError(e)));
  }
}

export function* onAuthChange({user}) {
  try {
    yield put(setUser(user));
  } catch (e) {
    console.error(e);
  }
}

export function* dataSaga() {
  yield takeLatest(GET_STATE, fetchState);
  yield takeLatest(RECEIVE_STATE, startLoading);
  yield takeLatest(RECEIVE_STATE, fetchCovidData);
  yield takeLatest(RECEIVE_COVID_DATA, stopLoading);
}

export function* sessionSaga() {
  yield takeLatest(LOG_IN, onLogin);
  yield takeLatest(SIGN_UP, onSignup);
  yield takeLatest(AUTH_CHANGED, onAuthChange);
  yield takeLatest(RECEIVE_USER, stopInitializing);
}

function getLocation() {
  return new Promise(resolve => {
    Geolocation.getCurrentPosition(async info => {
      const resp = await API.geocode(
        info.coords.latitude,
        info.coords.longitude,
      );

      const json = await resp.json();
      const withState = i => i.types.includes('administrative_area_level_1');
      const state = json.results[0].address_components.find(withState);

      resolve({
        shortName: state.short_name,
        longName: state.long_name,
      });
    });
  });
}
