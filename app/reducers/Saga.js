//@flow
import { createAction } from 'redux-actions'

export const SAGA_CREATE_ACTIVITY = 'SAGA_CREATE_ACTIVITY'
export const SAGA_CREATE_GROUP = 'SAGA_CREATE_GROUP'
export const SAGA_FETCH_ACTIVITIES = 'SAGA_FETCH_ACTIVITIES'
export const SAGA_FACEBOOK_LOGIN = 'SAGA_FACEBOOK_LOGIN'
export const SAGA_LOGOUT = 'SAGA_LOGOUT'
export const SAGA_AUTHENTICATE = 'SAGA_AUTHENTICATE'
export const SAGA_FETCH_CURRENT_LOCATION = 'SAGA_FETCH_CURRENT_LOCATION'
export const SAGA_UPDATE_PROFILE = 'SAGA_UPDATE_PROFILE'

export const createActivity = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_CREATE_ACTIVITY)({formData, resolve, reject})
export const createGroup = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_CREATE_GROUP)({formData, resolve, reject})
export const updateProfile = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_UPDATE_PROFILE)({formData, resolve, reject})
export const fetchActivities = () => createAction(SAGA_FETCH_ACTIVITIES)()
export const doLogin = () => createAction(SAGA_FACEBOOK_LOGIN)()
export const doLogout = () => createAction(SAGA_LOGOUT)()
export const doAuthenticate = () => createAction(SAGA_AUTHENTICATE)()
export const fetchCurrentLocation = () => createAction(SAGA_FETCH_CURRENT_LOCATION)()
