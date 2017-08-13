//@flow
import _ from 'lodash'
import { denormalizedActivities } from 'Closies/app/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/schemas/relations/Activity'

export const getActivities = (state: Object) => state.data.activities
export const getActivitiesValues = (state: Object) => _.values(getActivities(state))
export const getCurrentUser = (state: Object) => state.data.currentUser
export const getSelectedActivitiesDenormalized = (state: Object) => {
  return denormalizedActivities(_.keys(getActivities(state)), state.data, activitiesSchema)
}
