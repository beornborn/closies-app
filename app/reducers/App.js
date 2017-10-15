//@flow
import u from 'Closies/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const INITIALIZE_APP = 'app/INITIALIZE_APP'
const SET_AUTH_TOKEN = 'app/SET_AUTH_TOKEN'
const SET_SELECTED_ACTIVITY_ID = 'app/SET_SELECTED_ACTIVITY_ID'
const SET_CURRENT_LOCATION = 'app/SET_CURRENT_LOCATION'
const SET_ACTIVITIES_FILTER = 'ui/SET_ACTIVITIES_FILTER'
const SET_SELECTED_USER_ID = 'ui/SET_SELECTED_USER_ID'
const SET_SELECTED_GROUP_ID = 'ui/SET_SELECTED_GROUP_ID'
const SET_CURRENT_USER_ID = 'app/SET_CURRENT_USER_ID'
const SET_CURRENT_INVITE = 'app/SET_CURRENT_INVITE'

export const initializeApp = () => ca(INITIALIZE_APP)()
export const setAuthToken = (token: ?string) => ca(SET_AUTH_TOKEN)({token})
export const setSelectedActivityId = (activityId: string | number) => ca(SET_SELECTED_ACTIVITY_ID)({activityId})
export const setSelectedUserId = (userId: string | number) => ca(SET_SELECTED_USER_ID)({userId})
export const setSelectedGroupId = (groupId: ?string | number) => ca(SET_SELECTED_GROUP_ID)({groupId})
export const setCurrentLocation = (location: Object) => ca(SET_CURRENT_LOCATION)({location})
export const setActivitiesFilter = (filter: Object) => ca(SET_ACTIVITIES_FILTER)(filter)
export const setCurrentUserId = (userId: ?number) => ca(SET_CURRENT_USER_ID)({userId})
export const setCurrentInvite = (invite: Object) => ca(SET_CURRENT_INVITE)({invite})

const initialState = {
  initialized: false,
  authToken: null,
  selectedActivityId: null,
  selectedUserId: null,
  selectedGroupId: null,
  currentUserId: null,
  currentInvite: {},
  currentLocation: {
    coords: {
      latitude: 0,
      longitude: 0,
    }
  },
  area: {
    filter: {
      selectedActivityIds: [],
      groupIds: [],
    }
  },
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
    case SET_SELECTED_USER_ID:
      return u(state, {selectedUserId: {$set: p.userId}})
    case SET_SELECTED_GROUP_ID:
      return u(state, {selectedGroupId: {$set: p.groupId}})
    case SET_CURRENT_USER_ID:
      return u(state, {currentUserId: {$set: p.userId}})
    case SET_CURRENT_INVITE:
      return u(state, {currentInvite: {$set: p.invite}})
    case SET_CURRENT_LOCATION:
      return u(state, {currentLocation: {$set: p.location}})
    case SET_ACTIVITIES_FILTER:
      return u(state, {area: {filter: {$deepMerge: p}}})
    default:
      return state
  }
}
