//@flow
import { takeEvery, put } from 'redux-saga/effects'
import { SAGA_DELETE_GROUP } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { NavigationActions } from 'react-navigation'
import { setSelectedGroupId } from 'Closies/app/reducers/App'
import { setEntities } from 'Closies/app/reducers/Data'

const perform = function* perform(a) {
  try {
    const groupId = a.payload.groupId
    const response = yield apiCallWrapper(() => api.deleteGroup(groupId))
    if (response.status === 'Success') {
      yield put(setSelectedGroupId(null))
      yield put(setEntities({groups: {toDelete: [groupId]}}))
      yield put(NavigationActions.navigate({routeName: 'Groups'}))
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_DELETE_GROUP, perform)
}

export default watch
