//@flow
import { takeEvery, put, call } from 'redux-saga/effects'
import { SAGA_JOIN_GROUP } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { NavigationActions } from 'react-navigation'
import { setSelectedGroupId } from 'Closies/app/reducers/App'
import { reset, SubmissionError } from 'redux-form'
import { normalize } from 'normalizr'
import { setEntities } from 'Closies/app/reducers/Data'
import schemas from 'Closies/app/schemas/Normalizers'

const prepareParams = function* prepareParams(formData: Object): Generator<*,*,*> {
  const { token: t } = formData

  const token = (t && typeof t === 'object') ? t.value.trim() : t

  return { token }
}

const perform = function* perform(a) {
  try {
    const { resolve, reject, formData } = a.payload
    const params = yield prepareParams(formData)
    const response = yield apiCallWrapper(() => api.acceptInvite(params.token))
    if (response.status === 'Success') {
      const data = normalize(response.data.groups, [schemas.group]).entities
      yield put(setEntities(data))
      const group = response.data.groups[0]
      yield put(setSelectedGroupId(group.id))
      yield call(resolve)
      // $FlowFixMe
      yield put(reset('groups/join'))
      yield put(NavigationActions.navigate({routeName: 'GroupView', params: {title: group.name}}))
    } else {
      const error = new SubmissionError({ _error: response.error })
      yield call(reject, error)
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_JOIN_GROUP, perform)
}

export default watch
