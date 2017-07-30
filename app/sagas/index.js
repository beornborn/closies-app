//@flow
import { all, fork } from 'redux-saga/effects'
import watchActivity from 'Closies/app/sagas/CreateActivity'
import watchFetchActivities from 'Closies/app/sagas/FetchActivities'
import watchFacebookLogin from 'Closies/app/sagas/FacebookLogin'

const rootSaga = function* rootSaga(): Generator<any,any,any> {
  yield all([
    fork(watchActivity),
    fork(watchFetchActivities),
    fork(watchFacebookLogin),
  ])
}

export default rootSaga
