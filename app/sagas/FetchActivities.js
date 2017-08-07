//@flow
import { put, takeEvery } from 'redux-saga/effects'
import { SAGA_FETCH_ACTIVITIES } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { setActivities } from 'Closies/app/reducers/Data'
import { handleActivity, handleResponse } from 'Closies/app/utils/ApiHandlers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield api.fetchActivities()
    const result = yield handleResponse(response)
    if (result.status === 'Ok') {
      const activities = response.activities.map(handleActivity)
      yield put(setActivities(activities))
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_FETCH_ACTIVITIES, perform)
}

export default watch
