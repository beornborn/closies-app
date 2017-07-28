//@flow
import { createAction } from 'redux-actions'

export const SAGA_CHECK_IN = 'SAGA_CHECK_IN'
export const SAGA_FETCH_CHECK_INS = 'SAGA_FETCH_CHECK_INS'

export const checkIn = () => createAction(SAGA_CHECK_IN)()
export const fetchCheckIns = () => createAction(SAGA_FETCH_CHECK_INS)()
