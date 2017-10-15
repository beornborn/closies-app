//@flow
import { takeEvery, put, call } from 'redux-saga/effects'
import { SAGA_APPLY_FILTER } from 'Closies/app/reducers/Saga'
import { setActivitiesFilter } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'

const perform = function* perform(a) {
  try {
    const { resolve, formData } = a.payload
    yield put(setActivitiesFilter(formData))
    yield call(resolve)
    yield put(NavigationActions.navigate({routeName: 'Area'}))
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_APPLY_FILTER, perform)
}

export default watch
