//@flow
import { put } from 'redux-saga/effects'
import * as api from 'Closies/app/api'
import { setCurrentUserId } from 'Closies/app/reducers/App'
import { setEntities } from 'Closies/app/reducers/Data'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { normalize } from 'normalizr'
import schemas from 'Closies/app/reducers/schemas/Normalizers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield apiCallWrapper(() => api.fetchCurrentUser())
    if (response.status === 'Success') {
      yield put(setCurrentUserId(response.data.user.id))
      const data = normalize(response.data.user, schemas.user).entities
      yield put(setEntities(data))
      return response.data.user
    }
  } catch (err) { console.log(err) }
}
