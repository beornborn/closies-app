//@flow
import { takeEvery, select, put } from 'redux-saga/effects'
import { SAGA_CREATE_ACTIVITY } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { perform as fetchActivities } from 'Closies/app/sagas/FetchActivities'
import { handleResponse } from 'Closies/app/utils/ApiHandlers'
import { getCurrentUser } from 'Closies/app/reducers/selectors/Data'
import { NavigationActions } from 'react-navigation'

const perform = function* perform(a) {
  try {
    const { description, longitude, latitude } = a.payload.formData
    const user = yield select(getCurrentUser)
    const response = yield api.createActivity({
      latitude,//: 50.4414 + Math.random() * (50.4995 - 50.4014),
      longitude,//: 30.493 + Math.random() * (30.6920 - 30.5030),
      user_id: user.id,
      description: description.value
    })
    const result = yield handleResponse(response)
    if (result.status === 'Ok') {
      yield fetchActivities()
      yield put(NavigationActions.navigate({routeName: 'Area'}))
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CREATE_ACTIVITY, perform)
}

export default watch
