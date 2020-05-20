import auth from '@react-native-firebase/auth';
import {takeLatest, put} from 'redux-saga/effects';
import {setUser, setInitializing, setSessionError} from 'actions/session';
import {SIGN_UP, AUTH_CHANGED} from 'actions/types';
import Error from 'util/Error';

export function* onSignUp({params: {email, password}}) {
  try {
    yield auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    yield put(setSessionError(Error.parseFirebaseError(e)));
  }
}

export function* onAuthChange({user}) {
  try {
    yield put(setUser(user));
    yield put(setInitializing(false));
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(SIGN_UP, onSignUp);
  yield takeLatest(AUTH_CHANGED, onAuthChange);
}
