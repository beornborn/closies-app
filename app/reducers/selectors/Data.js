//@flow
import _ from 'lodash'
import { denormalizedActivities } from 'Closies/app/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/schemas/relations/Activity'

export const getActivities = (state: Object) => state.data.activities
export const getUsers = (state: Object) => state.data.users
export const getActivitiesValues = (state: Object) => _.values(getActivities(state))
export const getActivitiesDenormalized = (state: Object, activity_ids: Array<number>) => {
  return denormalizedActivities(activity_ids, state.data, activitiesSchema)
}
export const getGroups = (state: Object) => state.data.groups
export const getGroupsValues = (state: Object) => _.values(getGroups(state))
export const getGroupsCounts = (state: Object) => {
  const groups = getGroupsValues(state)
  return {
    family: groups.filter(x => x.size_type === 'family').length,
    closies: groups.filter(x => x.size_type === 'closies').length,
    special: groups.filter(x => x.size_type === 'special').length,
  }
}
export const getConfig = (state: Object) => state.data.config
export const getCanAddGroup = (state: Object) => {
  const groupsCounts = getGroupsCounts(state)
  const config = getConfig(state)
  const canAddFamily = groupsCounts.family < config.size_type_counts.family
  const canAddClosies = groupsCounts.closies < config.size_type_counts.closies
  const canAddSpecial = groupsCounts.special < config.size_type_counts.special
  return canAddFamily || canAddClosies || canAddSpecial
}

