//@flow
import { put, call } from 'redux-saga/effects'
// import { SAGA_FETCH_ACTIVITIES } from 'Closies/app/reducers/Saga'
import { setCurrentUser } from 'Closies/app/reducers/Data'
import FBSDK from 'react-native-fbsdk'

export const perform = function* perform(_a?: Object): Generator<*,*,*> {
  try {
    yield call(FBSDK.LoginManager.logOut)
    yield put(setCurrentUser({}))
  } catch (err) { console.log(err) }
}

// const watch = function* watch(): Generator<*,*,*> {
//   yield takeEvery(SAGA_FETCH_ACTIVITIES, perform)
// }

// export default watch
