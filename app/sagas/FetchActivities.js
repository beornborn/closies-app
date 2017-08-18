//@flow
import { put, takeLatest } from 'redux-saga/effects'
import { SAGA_FETCH_ACTIVITIES } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { setEntities } from 'Closies/app/reducers/Data'
import { setRegion } from 'Closies/app/reducers/App'
import { handleResponse } from 'Closies/app/utils/ApiHandlers'
import { calculateRegion } from 'Closies/app/utils/AreaCalculation'
import { normalize } from 'normalizr'
import schemas from 'Closies/app/schemas/Normalizers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield api.fetchActivities()
    const result = yield handleResponse(response)
    if (result.status === 'Ok') {
      const region = calculateRegion(result.data.activities)
      console.log(region)
      yield put(setRegion(region))

      // {
      //         latitude: 50.445483,
      //         longitude: 30.596962,
      //         latitudeDelta: 0.0152,
      //         longitudeDelta: 0.0002,
      //       }
      // {latitude: 50.445712335119, longitude: 30.597172602334048, latitudeDelta: 0.00842830533455583, longitudeDelta: 0.009571924700763646}

      const data = normalize(result.data.activities, [schemas.activity]).entities
      yield put(setEntities(data))
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeLatest(SAGA_FETCH_ACTIVITIES, perform)
}

export default watch
