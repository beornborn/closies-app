//@flow
import u from 'Closies/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const SET_ENTITIES = 'data/SET_ENTITIES'
const SET_CONFIG = 'data/SET_CONFIG'

export const setEntities = (entities: Object) => ca(SET_ENTITIES)({entities})
export const setConfig = (config: Object) => ca(SET_CONFIG)({config})

const initialState = {
  activities: {},
  users: {},
  groups: {},
  user_in_groups: {},
  config: {
    size_type_counts: {}
  },
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_ENTITIES:
      return u(state, {$deepMerge: p.entities})
    case SET_CONFIG:
      return u(state, {config: {$set: p.config}})
    default:
      return state
  }
}
