//@flow
import { put, takeEvery } from 'redux-saga/effects'
import { SAGA_FETCH_ACTIVITIES } from 'Closies/app/reducers/Saga'
import { setCheckIns } from 'Closies/app/reducers/Data'

const perform = function* perform(_a) {
  try {
    const activities = [
      {
        latlng: {
          latitude: 50.449483,
          longitude: 30.596962,
        },
        title: 'tolya bil zdes',
        description: 'ochen tolstiy tolya'
      },
      {
        latlng: {
          latitude: 50.448483,
          longitude: 30.595962,
        },
        title: 'vraki',
        description: 'ochen tolstiy tolya'
      },
    ]
    yield put(setCheckIns(activities))
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_FETCH_ACTIVITIES, perform)
}

export default watch
