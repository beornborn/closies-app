//@flow
import { all, fork } from 'redux-saga/effects'
import watchActivity from 'Closies/app/sagas/CreateActivity'
import watchFetchActivities from 'Closies/app/sagas/FetchActivities'

const rootSaga = function* rootSaga(): Generator<any,any,any> {
  yield all([
    fork(watchActivity),
    fork(watchFetchActivities),
  ])
}

export default rootSaga
