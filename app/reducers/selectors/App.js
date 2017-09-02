//@flow
import { getActivities, getActivitiesValues, getActivitiesDenormalized } from 'Closies/app/reducers/selectors/Data'
import { getFilterSelectedActivityIds } from 'Closies/app/reducers/selectors/Ui'
import { denormalizedActivities } from 'Closies/app/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/schemas/relations/Activity'
import { calculateRegion, calculateFocus, calculateClusterAreas, calculateClusters } from 'Closies/app/utils/AreaCalculation'
import _ from 'lodash'

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
  const focus = calculateFocus(activities)
  const clusterAreas = calculateClusterAreas(focus)
  const currentLocation = getCurrentLocation(state)
  const region = calculateRegion(activities, currentLocation.coords)
  const clusters = calculateClusters(denormActivities, clusterAreas)
  return { clusters, region }
}
