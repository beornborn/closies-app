//@flow
import { all, fork } from 'redux-saga/effects'
import watchActivity from 'Closies/app/sagas/CreateActivity'
import watchFetchActivities from 'Closies/app/sagas/FetchActivities'
import watchFacebookLogin from 'Closies/app/sagas/FacebookLogin'
import watchLogout from 'Closies/app/sagas/Logout'
import watchAuthenticate from 'Closies/app/sagas/Authenticate'

const rootSaga = function* rootSaga(): Generator<any,any,any> {
  yield all([
    fork(watchActivity),
    fork(watchFetchActivities),
    fork(watchFacebookLogin),
    fork(watchLogout),
    fork(watchAuthenticate),
  ])
}

export default rootSaga
