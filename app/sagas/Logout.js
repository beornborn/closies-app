//@flow
import { put, takeEvery } from 'redux-saga/effects'
import { SAGA_LOGOUT } from 'Closies/app/reducers/Saga'
import { setAuthToken } from 'Closies/app/reducers/App'
import { setCurrentUser } from 'Closies/app/reducers/Data'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'
import * as api from 'Closies/app/api'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'

export const clearAuthData = function* clearAuthData(): Generator<*,*,*> {
  yield put(setCurrentUser({}))
  yield put(setAuthToken(null))
  yield AsyncStorage.setAuthToken(null)
}

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield apiCallWrapper(() => api.logout())
    if (response.status === 'Success') {
      yield clearAuthData()
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_LOGOUT, perform)
}

export default watch
