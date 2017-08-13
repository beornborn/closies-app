//@flow
import _ from 'lodash'

export const getActivities = (state: Object) => _.values(state.data.activities)
export const getCurrentUser = (state: Object) => state.data.currentUser
