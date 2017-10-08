//@flow
import { takeEvery, put } from 'redux-saga/effects'
import { setCurrentLocation } from 'Closies/app/reducers/App'
import { SAGA_FETCH_CURRENT_LOCATION } from 'Closies/app/reducers/Saga'

const geolocate = () => new Promise(resolve => navigator.geolocation.getCurrentPosition(resolve))

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  const location = yield geolocate()
  yield put(setCurrentLocation(location))
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_FETCH_CURRENT_LOCATION, perform)
}

export default watch
