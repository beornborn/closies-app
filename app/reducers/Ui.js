//@flow
import u from 'Closies/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const DO_FORCE_RERENDER = 'ui/DO_FORCE_RERENDER'

export const doForceRerender = () => ca(DO_FORCE_RERENDER)()

const initialState = {
  forceRerender: false,
}

export default function reducer(state: Object = initialState, action: Action) {
  // const p = action.payload
  switch (action.type) {
    case DO_FORCE_RERENDER:
      return u(state, {forceRerender: {$set: !state.forceRerender}})
    default:
      return state
  }
}
