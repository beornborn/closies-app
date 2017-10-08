//@flow
import _ from 'lodash'
import { clearAuthData } from 'Closies/app/sagas/auth/Logout'
import { call } from 'redux-saga/effects'

export const handleActivity = (activity: Object) => {
  return {...activity, latlng: _.pick(activity, ['latitude', 'longitude'])}
}

export const apiCallWrapper = function* apiCallWrapper(callback: Function): Object {
  try {
    const response = yield call(callback)
    console.log(response)
    if (response.error) {
      if (response.error === 'not_authenticated') {
        console.log('--------------------- not_authenticated')
        yield clearAuthData()
      }
      return {status: 'Fail', error: response.error}
    }

    return {status: 'Success', data: response}
  } catch (err) {
    return { status: 'Fail', error: err.message }
  }
}
