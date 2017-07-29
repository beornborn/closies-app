//@flow
import { createAction } from 'redux-actions'

export const SAGA_ACTIVITY = 'SAGA_ACTIVITY'
export const SAGA_FETCH_ACTIVITIES = 'SAGA_FETCH_ACTIVITIES'

export const activity = () => createAction(SAGA_ACTIVITY)()
export const fetchCheckIns = () => createAction(SAGA_FETCH_ACTIVITIES)()
