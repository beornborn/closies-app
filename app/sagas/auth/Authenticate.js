//@flow
import { takeEvery, put, call, fork } from 'redux-saga/effects'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'
import { SAGA_AUTHENTICATE } from 'Closies/app/reducers/Saga'
import { initializeApp, setAuthToken } from 'Closies/app/reducers/App'
import { perform as fetchCurrentUser } from 'Closies/app/sagas/users/FetchCurrentUser'
import { perform as fetchCurrentLocation } from 'Closies/app/sagas/misc/FetchCurrentLocation'
import { perform as pollActivities } from 'Closies/app/sagas/activities/PollActivities'
import { perform as fetchConfig } from 'Closies/app/sagas/misc/FetchConfig'
import { perform as fetchGroups } from 'Closies/app/sagas/groups/FetchGroups'

export const perform = function* perform(): Generator<*,*,*> {
  try {
    const token = yield AsyncStorage.getAuthToken()

    if (token) {
      yield put(setAuthToken(token))
      const user = yield fetchCurrentUser()
      if (user) {
        yield fork(fetchCurrentLocation)
        yield fork(pollActivities)
        yield fork(fetchConfig)
        yield fork(fetchGroups)
      }
    }
    yield put(initializeApp())
    yield call(SplashScreen.hide)
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_AUTHENTICATE, perform)
}

export default watch


