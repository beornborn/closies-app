//@flow
import { createAction } from 'redux-actions'

export const SAGA_CREATE_ACTIVITY = 'SAGA_CREATE_ACTIVITY'
export const SAGA_FETCH_ACTIVITIES = 'SAGA_FETCH_ACTIVITIES'
export const SAGA_FACEBOOK_LOGIN = 'SAGA_FACEBOOK_LOGIN'

export const createActivity = () => createAction(SAGA_CREATE_ACTIVITY)()
export const fetchActivities = () => createAction(SAGA_FETCH_ACTIVITIES)()
export const doLogin = (error: Object, result: Object) => createAction(SAGA_FACEBOOK_LOGIN)({error, result})
