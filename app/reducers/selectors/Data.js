//@flow
import _ from 'lodash'
import { denormalizedActivities, denormalizedGroups } from 'Closies/app/reducers/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/reducers/schemas/relations/Activity'
import { groupsSchema } from 'Closies/app/reducers/schemas/relations/Group'
import { getSelectedGroupDenormalized } from 'Closies/app/reducers/selectors/App'
import moment from 'moment'

// ------------ activities ---------------
export const getActivities = (state: Object) => state.data.activities
export const getActivitiesValues = (state: Object) => _.values(getActivities(state))
export const getActivitiesDenormalized = (state: Object, activityIds: Array<number>) => {
  return denormalizedActivities(activityIds, state.data, activitiesSchema)
}


// ----------- users -----------------------
export const getAllUsers = (state: Object) => state.data.users
export const getAllUsersValues = (state: Object) => _.values(state.data.users)
export const getUsersValues = (state: Object, userIds: Array<number>) => {
  const allUsers = getAllUsers(state)
  const selectedUsersData = _.pick(allUsers, userIds.map(x => x.toString()))
  return _.values(selectedUsersData)
}


// ------------ groups --------------
export const getGroups = (state: Object) => state.data.groups
export const getGroupsValues = (state: Object) => _.values(getGroups(state))
export const getGroupsDenormalized = (state: Object, groupIds: Array<number>) => {
  return denormalizedGroups(groupIds, state.data, groupsSchema)
}
export const getAllGroupsDenormalized = (state: Object) => {
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


// ----------- user in groups -----------------------
export const getUserInGroups = (state: Object) => state.data.user_in_groups
export const getUserInGroupsValues = (state: Object) => _.values(state.data.user_in_groups)


// ---------- misc ---------------------
export const getConfig = (state: Object) => state.data.config
export const getDateRange = (state: Object) => {
  const activities = getActivitiesValues(state)
  const timestamps = activities.map(a => moment(a.created_at).unix() * 1000)

  return {
    startDate: _.min(timestamps),
    endDate: _.max(timestamps),
  }
}
