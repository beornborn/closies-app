//@flow
import u from 'Closies/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const SET_ENTITIES = 'data/SET_ENTITIES'

export const setEntities = (entities: Object) => ca(SET_ENTITIES)({entities})

const initialState = {
  activities: {},
  users: {},
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_ENTITIES:
      return u(state, {$deepMerge: p.entities})
    default:
      return state
  }
}
