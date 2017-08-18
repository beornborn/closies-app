//@flow
import u from 'immutability-helper'
import { createAction as cA } from 'redux-actions'

const INITIALIZE_APP = 'app/INITIALIZE_APP'
const SET_AUTH_TOKEN = 'app/SET_AUTH_TOKEN'
const SET_SELECTED_ACTIVITY_ID = 'app/SET_SELECTED_ACTIVITY_ID'
const SET_REGION = 'app/SET_REGION'

export const initializeApp = () => cA(INITIALIZE_APP)()
export const setAuthToken = (token: ?string) => cA(SET_AUTH_TOKEN)({token})
export const setSelectedActivityId = (activityId: string | number) => cA(SET_SELECTED_ACTIVITY_ID)({activityId})
export const setRegion = (region: Object) => cA(SET_REGION)({region})

const initialState = {
  initialized: false,
  authToken: null,
  selectedActivityId: null,
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  }
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
   case SET_REGION:
      return u(state, {region: {$set: p.region}})
    default:
      return state
  }
}
