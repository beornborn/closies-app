//@flow
import { getActivities, getUsers, getGroups, getActivitiesValues, getActivitiesDenormalized, getUserInGroupsValues } from 'Closies/app/reducers/selectors/Data'
import { denormalizedActivities, denormalizedGroups } from 'Closies/app/reducers/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/reducers/schemas/relations/Activity'
import { groupsSchema } from 'Closies/app/reducers/schemas/relations/Group'
import { calculateAreaData } from 'Closies/app/utils/area'
import _ from 'lodash'

// ----------- misc -----------------
export const getInitialized = (state: Object) => state.app.initialized
export const getCurrentRoute = (state: Object) => {
  const findCurrentRoute = (navState: Object) => {
    if (navState.index !== undefined) {
      return findCurrentRoute(navState.routes[navState.index])
    }
    return navState
  }
  return findCurrentRoute(state.nav)
}
export const getCurrentLocation = (state: Object) => state.app.currentLocation
export const getAreaData = (state: Object) => {
  const activities = getFilteredActivities(state)
  const currentLocation = getCurrentLocation(state)
  return calculateAreaData(activities, currentLocation)
}


// ----------- activities ---------------------
export const getSelectedActivityId = (state: Object) => state.app.selectedActivityId
export const getSelectedActivity = (state: Object) => {
  return getActivities(state)[getSelectedActivityId(state)]
}
export const getSelectedActivityDenormalized = (state: Object) => {
  return denormalizedActivities([getSelectedActivityId(state)], state.data, activitiesSchema)[0]
}
export const getFilteredActivities = (state: Object) => {
  const activities = getActivitiesValues(state)
  const sortedActivities = _.orderBy(activities, ['created_at'], ['desc'])
  const { selectedActivityIds, groupIds, userIds } = getActivitiesFilter(state)
  let filteredActivities = !_.isEmpty(selectedActivityIds) ? sortedActivities.filter(a => _.includes(selectedActivityIds, a.id)) : sortedActivities
  filteredActivities = getActivitiesDenormalized(state, filteredActivities.map(x => x.id))
  filteredActivities = !_.isEmpty(groupIds) ? filteredActivities.filter(a => _.includes(groupIds, a.user_in_group.group_id)) : filteredActivities
  filteredActivities = !_.isEmpty(userIds) ? filteredActivities.filter(a => _.includes(userIds, a.user_in_group.user_id)) : filteredActivities
  return filteredActivities
}
export const getActivitiesFilter = (state: Object) => {
  return state.app.area.filter
}


// -------------------- users ----------------
export const getSelectedUserId = (state: Object) => state.app.selectedUserId
export const getSelectedUser = (state: Object) => {
  return getUsers(state)[getSelectedUserId(state)] || {}
}
export const getCurrentUserId = (state: Object) => state.app.currentUserId
export const getCurrentUser = (state: Object): Object => {
  return getUsers(state)[getCurrentUserId(state)] || {}
}
export const getIsCurrentUserGroupOwner = (state: Object) => {
  const currentUserId = getCurrentUserId(state)
  const selectedGroupId = getSelectedGroupId(state)
  if (!currentUserId || !selectedGroupId) return false
  const userInGroups = getUserInGroupsValues(state)
  const currentUserInSelectedGroup = userInGroups.find(x => x.user_id === currentUserId && x.group_id === selectedGroupId)
  return (currentUserInSelectedGroup || {}).owner
}


// ------------------- groups ---------------
export const getSelectedGroupId = (state: Object) => state.app.selectedGroupId
export const getSelectedGroup = (state: Object) => {
  return getGroups(state)[getSelectedGroupId(state)] || {}
}
export const getSelectedGroupDenormalized = (state: Object) => {
  return denormalizedGroups([getSelectedGroupId(state)], state.data, groupsSchema)[0] || {}
}
export const getCurrentInvite = (state: Object) => state.app.currentInvite


