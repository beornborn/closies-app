//@flow
import { all, fork } from 'redux-saga/effects'
import watchAuthenticate from 'Closies/app/sagas/auth/Authenticate'
import watchFacebookLogin from 'Closies/app/sagas/auth/FacebookLogin'
import watchLogout from 'Closies/app/sagas/auth/Logout'
import watchUpdateProfile from 'Closies/app/sagas/users/UpdateProfile'
import watchFetchActivities from 'Closies/app/sagas/activities/FetchActivities'
import watchCreateActivity from 'Closies/app/sagas/activities/CreateActivity'
import watchCheckActivity from 'Closies/app/sagas/activities/CheckActivity'
import watchCreateGroup from 'Closies/app/sagas/groups/CreateGroup'
import watchCreateInvite from 'Closies/app/sagas/groups/CreateInvite'
import watchJoinGroup from 'Closies/app/sagas/groups/JoinGroup'
import watchDeleteGroup from 'Closies/app/sagas/groups/DeleteGroup'
import watchFetchCurrentLocation from 'Closies/app/sagas/misc/FetchCurrentLocation'

const rootSaga = function* rootSaga(): Generator<any,any,any> {
  yield all([
    fork(watchAuthenticate),
    fork(watchFacebookLogin),
    fork(watchLogout),
    fork(watchUpdateProfile),
    fork(watchFetchActivities),
    fork(watchCreateActivity),
    fork(watchCheckActivity),
    fork(watchCreateGroup),
    fork(watchJoinGroup),
    fork(watchCreateInvite),
    fork(watchDeleteGroup),
    fork(watchFetchCurrentLocation),
  ])
}

export default rootSaga
