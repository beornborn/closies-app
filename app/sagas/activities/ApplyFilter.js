//@flow
import { takeEvery, put, call } from 'redux-saga/effects'
import { SAGA_APPLY_FILTER } from 'Closies/app/reducers/Saga'
import { setActivitiesFilter } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'

const prepareParams = function* prepareParams(formData: Object): Generator<*,*,*> {
  const { startDate, endDate } = formData

  let params = {...formData}
  if (startDate && startDate.value) {
    params = {...params, startDate: startDate.value}
  }
  if (endDate && endDate.value) {
    params = {...params, endDate: endDate.value}
  }
  return params
}

const perform = function* perform(a) {
  try {
    const { resolve, formData } = a.payload
    const handledFormData = yield prepareParams(formData)
    yield put(setActivitiesFilter(handledFormData))
    yield call(resolve)
    yield put(NavigationActions.navigate({routeName: 'Area'}))
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_APPLY_FILTER, perform)
}

export default watch
