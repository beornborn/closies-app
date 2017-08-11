//@flow
import u from 'immutability-helper'
import { createAction as cA } from 'redux-actions'

const INITIALIZE_APP = 'app/INITIALIZE_APP'
const SET_AUTH_TOKEN = 'app/SET_AUTH_TOKEN'

export const initializeApp = () => cA(INITIALIZE_APP)()
export const setAuthToken = (token: ?string) => cA(SET_AUTH_TOKEN)({token})

const initialState = {
  initialized: false,
  authToken: null,
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case INITIALIZE_APP:
      return u(state, {initialized: {$set: true}})
    case SET_AUTH_TOKEN:
      return u(state, {authToken: {$set: p.token}})
    default:
      return state
  }
}
