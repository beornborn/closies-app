//@flow
import { takeEvery, put } from 'redux-saga/effects'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'
import { SAGA_AUTHENTICATE } from 'Closies/app/reducers/Saga'
import { initializeApp, setAuthToken } from 'Closies/app/reducers/App'
import { perform as fetchCurrentUser } from 'Closies/app/sagas/FetchCurrentUser'

const perform = function* perform(_a) {
  try {
    const token = yield AsyncStorage.getAuthToken()
    yield put(setAuthToken(token))
    yield fetchCurrentUser()
    yield put(initializeApp())
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_AUTHENTICATE, perform)
}

export default watch


