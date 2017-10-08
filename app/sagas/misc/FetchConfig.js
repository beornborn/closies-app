//@flow
import { put } from 'redux-saga/effects'
import * as api from 'Closies/app/api'
import { setConfig } from 'Closies/app/reducers/Data'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield apiCallWrapper(() => api.fetchConfig())
    if (response.status === 'Success') {
      yield put(setConfig(response.data.instance))
      return response.data.instance
    }
  } catch (err) { console.log(err) }
}
