//@flow
import u from 'immutability-helper'
import type { Action } from 'Closies/app/Types'
import { createAction as cA } from 'redux-actions'

export const DO_TEST = 'ui/DO_TEST'

export const doTest = () => cA(DO_TEST)()

const initialState = {
  test: false
}

export default function reducer(state: Object = initialState, action: Action) {
  // const p = action.payload
  switch (action.type) {
    case DO_TEST:
      return u(state, {test: {$set: true}})
    default:
      return state
  }
}
