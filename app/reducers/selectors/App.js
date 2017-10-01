//@flow
import { getActivities, getUsers, getGroups, getActivitiesValues, getActivitiesDenormalized, getUserInGroupsValues } from 'Closies/app/reducers/selectors/Data'
import { denormalizedActivities, denormalizedGroups } from 'Closies/app/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/schemas/relations/Activity'
import { groupsSchema } from 'Closies/app/schemas/relations/Group'
import { calculateAreaData } from 'Closies/app/utils/area'
import _ from 'lodash'

export const getFilterSelectedActivityIds = (state: Object) => state.app.area.filter.selectedActivityIds
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

export const getSelectedActivityId = (state: Object) => state.app.selectedActivityId
export const getSelectedActivity = (state: Object) => {
  return getActivities(state)[getSelectedActivityId(state)]
}
export const getSelectedUserId = (state: Object) => state.app.selectedUserId
export const getSelectedUser = (state: Object) => {
  return getUsers(state)[getSelectedUserId(state)] || {}
}
export const getSelectedGroupId = (state: Object) => state.app.selectedGroupId
export const getSelectedGroup = (state: Object) => {
  return getGroups(state)[getSelectedGroupId(state)] || {}
}
export const getSelectedGroupDenormalized = (state: Object) => {
  return denormalizedGroups([getSelectedGroupId(state)], state.data, groupsSchema)[0] || {}
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
export const getCurrentLocation = (state: Object) => state.app.currentLocation

export const getSelectedActivityDenormalized = (state: Object) => {
  return denormalizedActivities([getSelectedActivityId(state)], state.data, activitiesSchema)[0]
}
export const getFilteredActivities = (state: Object) => {
  const activities = getActivitiesValues(state)
  const sortedActivities = _.orderBy(activities, ['created_at'], ['desc'])
  const selectedActivityIds = getFilterSelectedActivityIds(state)
  return !_.isEmpty(selectedActivityIds) ? sortedActivities.filter(a => _.includes(selectedActivityIds, a.id)) : sortedActivities
}

export const getAreaData = (state: Object) => {
  const activities = getFilteredActivities(state)
  const denormActivities = getActivitiesDenormalized(state, activities.map(x => x.id))
  const currentLocation = getCurrentLocation(state)
  return calculateAreaData(denormActivities, currentLocation)
}
export const getCurrentInvite = (state: Object) => state.app.currentInvite
