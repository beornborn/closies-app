//@flow
import { takeEvery, put, call, select } from 'redux-saga/effects'
import { SAGA_CREATE_ACTIVITY } from 'Closies/app/reducers/Saga'
import { getCurrentLocation } from 'Closies/app/reducers/selectors/App'
import { Keyboard } from 'react-native'
import * as api from 'Closies/app/api'
import { perform as fetchActivities } from 'Closies/app/sagas/activities/FetchActivities'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { NavigationActions } from 'react-navigation'
import { reset } from 'redux-form'

const prepareParams = function* prepareParams(formData: Object, location: Object): Generator<*,*,*> {
  const { description, image, group_ids } = formData

  let params = {
    latitude: location.coords.latitude,//: 50.4414 + Math.random() * (50.4995 - 50.4014),
    longitude: location.coords.longitude,//: 30.493 + Math.random() * (30.6920 - 30.5030),
    group_ids,
  }
  if (description && description.value) {
    params = {...params, description: description.value}
  }
  if (image && image.uri) {
    params = {
      ...params,
      image: {
        type: image.type,
        uri: image.uri,
        name: image.fileName,
      }
    }
  }
  return params
}

const perform = function* perform(a) {
  try {
    const { resolve, reject, formData } = a.payload
    yield call(Keyboard.dismiss)
    const location = yield select(getCurrentLocation)
    const params = yield prepareParams(formData, location)

    const response = yield apiCallWrapper(() => api.createActivity(params))
    if (response.status === 'Success') {
      yield fetchActivities()
      yield call(resolve)
      // $FlowFixMe
      yield put(reset('area/activity/new'))
      yield put(NavigationActions.navigate({routeName: 'Area'}))
    } else {
      yield call(reject)
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CREATE_ACTIVITY, perform)
}

export default watch
