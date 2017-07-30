//@flow
import { takeEvery } from 'redux-saga/effects'
import { SAGA_CREATE_ACTIVITY } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { perform as fetchActivities } from 'Closies/app/sagas/FetchActivities'

const geolocate = () => new Promise(resolve => navigator.geolocation.getCurrentPosition(resolve))

const perform = function* perform(_a) {
  try {
    const location = yield geolocate()
    const response = yield api.createActivity({
      latitude: 50.4414 + Math.random() * (50.4495 - 50.4414),//location.coords.latitude,
      longitude: 30.593 + Math.random() * (30.602 - 30.593),//location.coords.longitude,
    })

    console.log(location)
    yield fetchActivities()
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CREATE_ACTIVITY, perform)
}

export default watch
