//@flow
import u from 'immutability-helper'
import { createAction as cA } from 'redux-actions'

const SET_ACTIVITIES = 'data/SET_ACTIVITIES'

export const setActivities = (activities: Array<Object>) => cA(SET_ACTIVITIES)({activities})

const initialState = {
  activities: []
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_ACTIVITIES:
      return u(state, {activities: {$set: p.activities}})
    default:
      return state
  }
}
