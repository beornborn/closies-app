//@flow
import { takeEvery, put, call } from 'redux-saga/effects'
import { SAGA_CREATE_GROUP } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { NavigationActions } from 'react-navigation'
import { reset } from 'redux-form'
import { normalize } from 'normalizr'
import { setEntities } from 'Closies/app/reducers/Data'
import schemas from 'Closies/app/schemas/Normalizers'

const prepareParams = function* prepareParams(formData: Object): Generator<*,*,*> {
  const { size_type: st, name: n } = formData

  const size_type = (st && typeof st === 'object') ? st.value.trim() : st
  const name = (n && typeof n === 'object') ? n.value.trim() : n

  return { size_type, name }
}

const perform = function* perform(a) {
  try {
    const { resolve, reject, formData } = a.payload
    const params = yield prepareParams(formData)

    const response = yield apiCallWrapper(() => api.createGroup(params))
    if (response.status === 'Success') {
      const data = normalize(response.data.groups, [schemas.group]).entities
      yield put(setEntities(data))
      yield call(resolve)
      // $FlowFixMe
      yield put(reset('groups/new'))
      yield put(NavigationActions.navigate({routeName: 'Groups'}))
    } else {
      yield call(reject)
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CREATE_GROUP, perform)
}

export default watch
