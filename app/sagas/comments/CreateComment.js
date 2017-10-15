//@flow
import { takeEvery, put, call, select } from 'redux-saga/effects'
import { SAGA_CREATE_ACTIVITY_COMMENT } from 'Closies/app/reducers/Saga'
import { getSelectedActivityId } from 'Closies/app/reducers/selectors/App'
import { Keyboard } from 'react-native'
import * as api from 'Closies/app/api'
import { perform as fetchActivities } from 'Closies/app/sagas/activities/FetchActivities'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { reset } from 'redux-form'

const prepareParams = function* prepareParams(formData: Object): Generator<*,*,*> {
  const { body } = formData

  const activityId = yield select(getSelectedActivityId)
  return {
    activity_id: activityId,
    body: body.value,
  }
}

const perform = function* perform(a) {
  try {
    const { resolve, reject, formData } = a.payload
    yield call(Keyboard.dismiss)
    const params = yield prepareParams(formData)

    const response = yield apiCallWrapper(() => api.createComment(params))
    if (response.status === 'Success') {
      yield fetchActivities()
      yield call(resolve)
      // $FlowFixMe
      yield put(reset('area/activity/comment/new'))
    } else {
      yield call(reject)
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CREATE_ACTIVITY_COMMENT, perform)
}

export default watch
