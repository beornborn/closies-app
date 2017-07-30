//@flow
import { routes } from 'Closies/app/__config/Config'
import { apiGet, apiPost } from 'Closies/app/api/__helpers'

export function fetchActivities() {
  return apiGet(routes.activities.index())
}

export function createActivity(activity: Object) {
  return apiPost(routes.activities.create(), {activity})
}
