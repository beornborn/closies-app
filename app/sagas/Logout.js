//@flow
import { put, call, takeEvery } from 'redux-saga/effects'
import { SAGA_LOGOUT } from 'Closies/app/reducers/Saga'
import { setAuthToken } from 'Closies/app/reducers/App'
import { setCurrentUser } from 'Closies/app/reducers/Data'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'
import FBSDK from 'react-native-fbsdk'
import * as api from 'Closies/app/api'

export const clearAuthData = function* clearAuthData(): Generator<*,*,*> {
  yield call(FBSDK.LoginManager.logOut)
  yield put(setCurrentUser({}))
  yield put(setAuthToken(null))
  yield AsyncStorage.setAuthToken(null)
}

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    yield api.logout()
    yield clearAuthData()
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_LOGOUT, perform)
}

export default watch
