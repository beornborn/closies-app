//@flow
import { createAction } from 'redux-actions'

export const SAGA_CREATE_ACTIVITY = 'SAGA_CREATE_ACTIVITY'
export const SAGA_FETCH_ACTIVITIES = 'SAGA_FETCH_ACTIVITIES'
export const SAGA_FACEBOOK_LOGIN = 'SAGA_FACEBOOK_LOGIN'
export const SAGA_LOGOUT = 'SAGA_LOGOUT'
export const SAGA_AUTHENTICATE = 'SAGA_AUTHENTICATE'
export const SAGA_FETCH_CURRENT_LOCATION = 'SAGA_FETCH_CURRENT_LOCATION'

export const createActivity = (formData: Object) => createAction(SAGA_CREATE_ACTIVITY)({formData})
export const fetchActivities = () => createAction(SAGA_FETCH_ACTIVITIES)()
export const doLogin = () => createAction(SAGA_FACEBOOK_LOGIN)()
export const doLogout = () => createAction(SAGA_LOGOUT)()
export const doAuthenticate = () => createAction(SAGA_AUTHENTICATE)()
export const fetchCurrentLocation = () => createAction(SAGA_FETCH_CURRENT_LOCATION)()
