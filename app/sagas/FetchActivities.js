//@flow
import { put, takeLatest, select } from 'redux-saga/effects'
import { SAGA_FETCH_ACTIVITIES } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { setEntities } from 'Closies/app/reducers/Data'
import { doForceRerender } from 'Closies/app/reducers/Ui'
import { handleResponse } from 'Closies/app/utils/ApiHandlers'
import { normalize } from 'normalizr'
import { sleep } from 'Closies/app/utils/Common'
import { getActivitiesValues } from 'Closies/app/reducers/selectors/Data'
import schemas from 'Closies/app/schemas/Normalizers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield api.fetchActivities()
    const result = yield handleResponse(response)
    if (result.status === 'Ok') {
      const storedActivities = yield select(getActivitiesValues)
      if (storedActivities.length !== result.data.activities.length) {
        const data = normalize(result.data.activities, [schemas.activity]).entities
        yield put(setEntities(data))
        yield sleep(100)
        yield put(doForceRerender())
      }
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeLatest(SAGA_FETCH_ACTIVITIES, perform)
}

export default watch
