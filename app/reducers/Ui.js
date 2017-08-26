//@flow
import u from 'immutability-helper'
import { createAction as ca } from 'redux-actions'

const DO_FORCE_RERENDER = 'ui/DO_FORCE_RERENDER'
const SET_SELECTED_ACTIVITIES_FILTER = 'ui/SET_SELECTED_ACTIVITIES_FILTER'

export const doForceRerender = () => ca(DO_FORCE_RERENDER)()
export const setSelectedActivitiesFilter = (selectedActivityIds: Array<number>) => ca(SET_SELECTED_ACTIVITIES_FILTER)({selectedActivityIds})

const initialState = {
  forceRerender: false,
  area: {
    filter: {
      selectedActivityIds: []
    }
  }
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case DO_FORCE_RERENDER:
      return u(state, {forceRerender: {$set: !state.forceRerender}})
    case SET_SELECTED_ACTIVITIES_FILTER:
      return u(state, {area: {filter: {selectedActivityIds: {$set: p.selectedActivityIds}}}})
    default:
      return state
  }
}
