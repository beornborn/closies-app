//@flow
import { takeEvery, put, select } from 'redux-saga/effects'
import { SAGA_CREATE_INVITE } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'
import { NavigationActions } from 'react-navigation'
import { setCurrentInvite } from 'Closies/app/reducers/App'
import { getSelectedGroupId } from 'Closies/app/reducers/selectors/App'

const perform = function* perform() {
  try {
    const groupId = yield select(getSelectedGroupId)
    const response = yield apiCallWrapper(() => api.createInvite(groupId))
    if (response.status === 'Success') {
      yield put(setCurrentInvite(response.data.invite))
      yield put(NavigationActions.navigate({routeName: 'CurrentInvite'}))
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CREATE_INVITE, perform)
}

export default watch
