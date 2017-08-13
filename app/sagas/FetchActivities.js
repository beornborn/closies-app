//@flow
import { put, takeLatest } from 'redux-saga/effects'
import { SAGA_FETCH_ACTIVITIES } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { setEntities } from 'Closies/app/reducers/Data'
import { handleResponse } from 'Closies/app/utils/ApiHandlers'
import { normalize } from 'normalizr'
import schemas from 'Closies/app/schemas/Normalizers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield api.fetchActivities()
    const result = yield handleResponse(response)
    if (result.status === 'Ok') {
      const data = normalize(result.data.activities, [schemas.activity]).entities
      yield put(setEntities(data))
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeLatest(SAGA_FETCH_ACTIVITIES, perform)
}

export default watch
