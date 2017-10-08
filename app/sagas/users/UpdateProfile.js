//@flow
import { takeEvery, put, call } from 'redux-saga/effects'
import { SAGA_UPDATE_PROFILE } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { perform as fetchCurrentUser } from 'Closies/app/sagas/users/FetchCurrentUser'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { NavigationActions } from 'react-navigation'
import { Keyboard } from 'react-native'
import { setSelectedUserId } from 'Closies/app/reducers/App'

const prepareParams = function* prepareParams(formData: Object): Generator<*,*,*> {
  const { full_name: fn, phone_number: pn } = formData

  const full_name = (fn && typeof fn === 'object') ? fn.value.trim() : fn
  let phone_number = (pn && typeof pn === 'object') ? pn.value.trim() : pn
  phone_number = phone_number === '' ? null : phone_number
  const messengers = formData.messengers.map(v => v.value)

  return { full_name, phone_number, messengers }
}

const perform = function* perform(a) {
  try {
    const { resolve, reject, formData } = a.payload

    yield call(Keyboard.dismiss)
    const params = yield prepareParams(formData)
    const response = yield apiCallWrapper(() => api.updateUser(params))
    if (response.status === 'Success') {
      const user = yield fetchCurrentUser()
      yield put(setSelectedUserId(user.id))
      yield call(resolve)
      yield put(NavigationActions.navigate({routeName: 'ViewProfile'}))
    } else {
      yield call(reject)
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_UPDATE_PROFILE, perform)
}

export default watch
