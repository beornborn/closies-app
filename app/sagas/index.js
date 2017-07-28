//@flow
import { all, fork } from 'redux-saga/effects'
import watchCheckIn from 'Closies/app/sagas/CheckIn'
import watchFetchCheckIns from 'Closies/app/sagas/FetchCheckIns'

const rootSaga = function* rootSaga(): Generator<any,any,any> {
  yield all([
    fork(watchCheckIn),
    fork(watchFetchCheckIns),
  ])
}

export default rootSaga
