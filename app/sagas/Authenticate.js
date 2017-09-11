//@flow
import { takeEvery, put, call, fork } from 'redux-saga/effects'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'
import { SAGA_AUTHENTICATE } from 'Closies/app/reducers/Saga'
import { initializeApp, setAuthToken } from 'Closies/app/reducers/App'
import { perform as fetchCurrentUser } from 'Closies/app/sagas/FetchCurrentUser'
import { perform as fetchCurrentLocation } from 'Closies/app/sagas/FetchCurrentLocation'
import { perform as pollActivities } from 'Closies/app/sagas/PollActivities'

export const perform = function* perform(): Generator<*,*,*> {
  try {
    const token = yield AsyncStorage.getAuthToken()

    if (token) {
      yield put(setAuthToken(token))
      yield fetchCurrentUser()
      yield fetchCurrentLocation()
      yield fork(pollActivities)
    }
    yield put(initializeApp())
    yield call(SplashScreen.hide)
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_AUTHENTICATE, perform)
}

export default watch


