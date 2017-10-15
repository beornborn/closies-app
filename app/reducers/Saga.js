//@flow
import { createAction } from 'redux-actions'

const sendReduxFormActionCreator = (actionName: string) =>
  (formData: Object, resolve: Function, reject: Function) =>
    createAction(actionName)({formData, resolve, reject})

// ---------- auth ----------------
export const SAGA_AUTHENTICATE = 'SAGA_AUTHENTICATE'
export const SAGA_FACEBOOK_LOGIN = 'SAGA_FACEBOOK_LOGIN'
export const SAGA_LOGOUT = 'SAGA_LOGOUT'

export const doAuthenticate = () => createAction(SAGA_AUTHENTICATE)()
export const doLogin = () => createAction(SAGA_FACEBOOK_LOGIN)()
export const doLogout = () => createAction(SAGA_LOGOUT)()


// ---------- activities ----------------
export const SAGA_FETCH_ACTIVITIES = 'SAGA_FETCH_ACTIVITIES'
export const SAGA_CREATE_ACTIVITY = 'SAGA_CREATE_ACTIVITY'
export const SAGA_APPLY_FILTER = 'SAGA_APPLY_FILTER'
export const SAGA_CREATE_ACTIVITY_COMMENT = 'SAGA_CREATE_ACTIVITY_COMMENT'
export const SAGA_CHECK_ACTIVITY = 'SAGA_CHECK_ACTIVITY'

export const fetchActivities = () => createAction(SAGA_FETCH_ACTIVITIES)()
export const createActivity = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_CREATE_ACTIVITY)({formData, resolve, reject})
export const createActivityComment = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_CREATE_ACTIVITY_COMMENT)({formData, resolve, reject})
export const checkActivity = (activity: Object) => createAction(SAGA_CHECK_ACTIVITY)({activity})
export const applyFilter = sendReduxFormActionCreator(SAGA_APPLY_FILTER)


// ---------- groups ----------------
export const SAGA_CREATE_GROUP = 'SAGA_CREATE_GROUP'
export const SAGA_CREATE_INVITE = 'SAGA_CREATE_INVITE'
export const SAGA_JOIN_GROUP = 'SAGA_JOIN_GROUP'
export const SAGA_DELETE_GROUP = 'SAGA_DELETE_GROUP'

export const createGroup = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_CREATE_GROUP)({formData, resolve, reject})
export const createInvite = () => createAction(SAGA_CREATE_INVITE)()
export const joinGroup = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_JOIN_GROUP)({formData, resolve, reject})
export const deleteGroup = (groupId: number) => createAction(SAGA_DELETE_GROUP)({groupId})


// ---------- users ----------------
export const SAGA_UPDATE_PROFILE = 'SAGA_UPDATE_PROFILE'

export const updateProfile = (formData: Object, resolve: Function, reject: Function) =>
  createAction(SAGA_UPDATE_PROFILE)({formData, resolve, reject})


// ---------- misc ----------------
export const SAGA_FETCH_CURRENT_LOCATION = 'SAGA_FETCH_CURRENT_LOCATION'

export const fetchCurrentLocation = () => createAction(SAGA_FETCH_CURRENT_LOCATION)()
