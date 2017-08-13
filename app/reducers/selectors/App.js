//@flow
import { getActivities } from 'Closies/app/reducers/selectors/Data'
import { denormalizedActivities } from 'Closies/app/schemas/Denormalizers'
import { activitiesSchema } from 'Closies/app/schemas/relations/Activity'

export const getInitialized = (state: Object) => state.app.initialized
export const getCurrentRoute = (state: Object) => {
  const findCurrentRoute = (navState: Object) => {
    if (navState.index !== undefined) {
      return findCurrentRoute(navState.routes[navState.index])
    }
    return navState.routeName
  }
  return findCurrentRoute(state.nav)
}

export const getSelectedActivityId = (state: Object) => state.app.selectedActivityId
export const getSelectedActivity = (state: Object) => {
  return getActivities(state)[getSelectedActivityId(state)]
}

export const getSelectedActivityDenormalized = (state: Object) => {
  return denormalizedActivities([getSelectedActivityId(state)], state.data, activitiesSchema)[0]
}
