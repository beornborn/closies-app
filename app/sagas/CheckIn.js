//@flow
import { takeEvery } from 'redux-saga/effects'
import { SAGA_CHECK_IN } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'

const perform = function* perform(_a) {
  try {
    const response = yield api.createCheckIn({a: 123})
    console.log(response)
    navigator.geolocation.getCurrentPosition((q) => {
      console.log(q)
    })
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CHECK_IN, perform)
}

export default watch
