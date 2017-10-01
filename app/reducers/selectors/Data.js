//@flow
import _ from 'lodash'
import { denormalizedActivities, denormalizedGroups } from 'Closies/app/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/schemas/relations/Activity'
import { groupsSchema } from 'Closies/app/schemas/relations/Group'
import { getSelectedGroupDenormalized } from 'Closies/app/reducers/selectors/App'

export const getActivities = (state: Object) => state.data.activities
export const getUsers = (state: Object) => state.data.users
export const getActivitiesValues = (state: Object) => _.values(getActivities(state))
export const getActivitiesDenormalized = (state: Object, activity_ids: Array<number>) => {
  return denormalizedActivities(activity_ids, state.data, activitiesSchema)
}
export const getGroups = (state: Object) => state.data.groups
export const getGroupsValues = (state: Object) => _.values(getGroups(state))
export const getGroupsDenormalized = (state: Object) => {
  const groups = getGroupsValues(state)
  const group_ids = groups.map(x => x.id)
  return denormalizedGroups(group_ids, state.data, groupsSchema)
}
export const getGroupsCounts = (state: Object) => {
  const groups = getGroupsValues(state)
  return {
    family: groups.filter(x => x.size_type === 'family').length,
    closies: groups.filter(x => x.size_type === 'closies').length,
    special: groups.filter(x => x.size_type === 'special').length,
  }
}
export const getUserInGroups = (state: Object) => state.data.user_in_groups
export const getUserInGroupsValues = (state: Object) => _.values(state.data.user_in_groups)
export const getConfig = (state: Object) => state.data.config
export const getCanAddGroup = (state: Object) => {
  const groupsCounts = getGroupsCounts(state)
  const config = getConfig(state)
  const canAddFamily = groupsCounts.family < config.size_type_counts.family
  const canAddClosies = groupsCounts.closies < config.size_type_counts.closies
  const canAddSpecial = groupsCounts.special < config.size_type_counts.special
  return canAddFamily || canAddClosies || canAddSpecial
}
export const getCanInviteUser = (state: Object) => {
  const group = getSelectedGroupDenormalized(state)
  if (!group.id) return false
  const config = getConfig(state)
  const limit = config.size_limits[group.size_type]
  return group.user_in_groups.length < limit
}
