//@flow
import u from 'immutability-helper'
import { createAction as cA } from 'redux-actions'

const INITIALIZE_APP = 'app/INITIALIZE_APP'
const SET_AUTH_TOKEN = 'app/SET_AUTH_TOKEN'
const SET_SELECTED_ACTIVITY_ID = 'app/SET_SELECTED_ACTIVITY_ID'
const SET_CURRENT_LOCATION = 'app/SET_CURRENT_LOCATION'

export const initializeApp = () => cA(INITIALIZE_APP)()
export const setAuthToken = (token: ?string) => cA(SET_AUTH_TOKEN)({token})
export const setSelectedActivityId = (activityId: string | number) => cA(SET_SELECTED_ACTIVITY_ID)({activityId})
export const setCurrentLocation = (location: Object) => cA(SET_CURRENT_LOCATION)({location})

const initialState = {
  initialized: false,
  authToken: null,
  selectedActivityId: null,
  currentLocation: {coords: {}}
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case INITIALIZE_APP:
      return u(state, {initialized: {$set: true}})
    case SET_AUTH_TOKEN:
      return u(state, {authToken: {$set: p.token}})
    case SET_SELECTED_ACTIVITY_ID:
      return u(state, {selectedActivityId: {$set: p.activityId}})
    case SET_CURRENT_LOCATION:
      return u(state, {currentLocation: {$set: p.location}})
    default:
      return state
  }
}
