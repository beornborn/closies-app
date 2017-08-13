//@flow
import u from 'Closies/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const SET_ENTITIES = 'data/SET_ENTITIES'
const SET_CURRENT_USER = 'app/SET_CURRENT_USER'

export const setEntities = (entities: Object) => ca(SET_ENTITIES)({entities})
export const setCurrentUser = (user: Object) => ca(SET_CURRENT_USER)({user})

const initialState = {
  currentUser: {},
  activities: []
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_ENTITIES:
      return u(state, {$deepMerge: p.entities})
    case SET_CURRENT_USER:
      return u(state, {currentUser: {$set: p.user}})
    default:
      return state
  }
}
