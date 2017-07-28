//@flow
import { takeEvery } from 'redux-saga/effects'
import { SAGA_CHECK_IN } from 'Closies/app/reducers/Saga'

const perform = function* perform(_a) {
  try {
    console.log('wqeqweqe')
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CHECK_IN, perform)
}

export default watch
