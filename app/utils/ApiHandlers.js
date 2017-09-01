//@flow
import _ from 'lodash'
import { clearAuthData } from 'Closies/app/sagas/Logout'

export const handleActivity = (activity: Object) => {
  return {...activity, latlng: _.pick(activity, ['latitude', 'longitude'])}
}

export const handleResponse = function* handleResponse(response: Object): Object {
  if (response.error === 'not_authenticated') {
    console.log('--------------------- not_authenticated')
    yield clearAuthData()
    return {status: 'Fail'}
  }
  return {status: 'Ok', data: response}
}
