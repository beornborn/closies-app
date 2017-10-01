//@flow
import { all, fork } from 'redux-saga/effects'
import watchCreateActivity from 'Closies/app/sagas/CreateActivity'
import watchCreateGroup from 'Closies/app/sagas/CreateGroup'
import watchFetchActivities from 'Closies/app/sagas/FetchActivities'
import watchFacebookLogin from 'Closies/app/sagas/FacebookLogin'
import watchLogout from 'Closies/app/sagas/Logout'
import watchAuthenticate from 'Closies/app/sagas/Authenticate'
import watchFetchCurrentLocation from 'Closies/app/sagas/FetchCurrentLocation'
import watchUpdateProfile from 'Closies/app/sagas/UpdateProfile'
import watchCreateInvite from 'Closies/app/sagas/CreateInvite'
import watchDeleteGroup from 'Closies/app/sagas/DeleteGroup'

const rootSaga = function* rootSaga(): Generator<any,any,any> {
  yield all([
    fork(watchCreateActivity),
    fork(watchCreateGroup),
    fork(watchFetchActivities),
    fork(watchFacebookLogin),
    fork(watchLogout),
    fork(watchAuthenticate),
    fork(watchFetchCurrentLocation),
    fork(watchUpdateProfile),
    fork(watchCreateInvite),
    fork(watchDeleteGroup),
  ])
}

export default rootSaga
