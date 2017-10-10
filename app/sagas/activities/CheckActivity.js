//@flow
import { takeEvery } from 'redux-saga/effects'
import { SAGA_CHECK_ACTIVITY } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { perform as fetchActivities } from 'Closies/app/sagas/activities/FetchActivities'

const perform = function* perform(a) {
  try {
    const activity = a.payload.activity
    const response = yield apiCallWrapper(() => api.checkActivity(activity.id))
    if (response.status === 'Success') {
      yield fetchActivities()
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CHECK_ACTIVITY, perform)
}

export default watch
