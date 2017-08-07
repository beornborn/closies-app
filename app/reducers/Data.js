//@flow
import u from 'immutability-helper'
import { createAction as cA } from 'redux-actions'

const SET_ACTIVITIES = 'data/SET_ACTIVITIES'
const SET_CURRENT_USER = 'app/SET_CURRENT_USER'

export const setActivities = (activities: Array<Object>) => cA(SET_ACTIVITIES)({activities})
export const setCurrentUser = (user: Object) => cA(SET_CURRENT_USER)({user})

const initialState = {
  currentUser: {},
  activities: []
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_ACTIVITIES:
      return u(state, {activities: {$set: p.activities}})
    case SET_CURRENT_USER:
      return u(state, {currentUser: {$set: p.user}})
    default:
      return state
  }
}
