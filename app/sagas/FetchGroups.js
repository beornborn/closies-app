//@flow
import { put } from 'redux-saga/effects'
import * as api from 'Closies/app/api'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { normalize } from 'normalizr'
import { setEntities } from 'Closies/app/reducers/Data'
import schemas from 'Closies/app/schemas/Normalizers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield apiCallWrapper(() => api.fetchGroups())
    if (response.status === 'Success') {
      const data = normalize(response.data.groups, [schemas.group]).entities
      yield put(setEntities(data))
      return response.data.groups
    }
  } catch (err) { console.log(err) }
}
