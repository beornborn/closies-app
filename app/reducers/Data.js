//@flow
import type { Action } from 'Closies/app/Types'
import u from 'immutability-helper'
import { createAction as cA } from 'redux-actions'

const SET_CHECK_INS = 'data/SET_CHECK_INS'

export const setCheckIns = (checkIns: Array<Object>) => cA(SET_CHECK_INS)({checkIns})

const initialState = {
  checkIns: []
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_CHECK_INS:
      return u(state, {checkIns: {$set: p.checkIns}})
    default:
      return state
  }
}
