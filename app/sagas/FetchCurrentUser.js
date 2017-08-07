//@flow
import { put } from 'redux-saga/effects'
// import { SAGA_FETCH_ACTIVITIES } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { setCurrentUser } from 'Closies/app/reducers/Data'
import { handleResponse } from 'Closies/app/utils/ApiHandlers'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    const response = yield api.fetchCurrentUser()
    const result = yield handleResponse(response)
    if (result.status === 'Ok') {
      yield put(setCurrentUser(response.current_user))
      return response.current_user
    }
  } catch (err) { console.log(err) }
}

// const watch = function* watch(): Generator<*,*,*> {
//   yield takeEvery(SAGA_FETCH_ACTIVITIES, perform)
// }

// export default watch
