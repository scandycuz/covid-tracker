import {takeLatest, put} from 'redux-saga/effects';
import {setUser, setInitializing} from 'actions/session';
import {AUTH_CHANGED} from 'actions/types';

export function* onAuthChange(action) {
  try {
    yield put(setUser(action.user));
    yield put(setInitializing(false));
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(AUTH_CHANGED, onAuthChange);
}
