//@flow
import { takeEvery, put } from 'redux-saga/effects'
import { setCurrentLocation } from 'Closies/app/reducers/App'
import { SAGA_FETCH_CURRENT_LOCATION } from 'Closies/app/reducers/Saga'
import { sleep } from 'Closies/app/utils/Common'

const geolocate = () => new Promise(resolve => navigator.geolocation.getCurrentPosition(resolve, resolve))

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  while (true) {
    const location = yield geolocate()
    console.log(location)
    if (!location.message) {
      yield put(setCurrentLocation(location))
      break
    } else {
      yield sleep(1000)
    }
  }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_FETCH_CURRENT_LOCATION, perform)
}

export default watch
