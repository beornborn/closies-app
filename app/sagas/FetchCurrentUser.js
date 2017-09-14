//@flow
import { put } from 'redux-saga/effects'
import * as api from 'Closies/app/api'
import { setCurrentUser } from 'Closies/app/reducers/Data'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield apiCallWrapper(() => api.fetchCurrentUser())
    if (response.status === 'Success') {
      yield put(setCurrentUser(response.data.user))
      return response.data.user
    }
  } catch (err) { console.log(err) }
}
