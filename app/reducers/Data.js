//@flow
import type { Action } from 'Closies/app/Types'

const initialState = {}

export default function reducer(state: Object = initialState, action: Action) {
  // const p = action.payload
  switch (action.type) {
    default:
      return state
  }
}
