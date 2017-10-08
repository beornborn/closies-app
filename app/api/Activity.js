//@flow
import { routes } from 'Closies/app/__config/Api'
import { apiGet, apiPostFormData } from 'Closies/app/api/__helpers'

export function fetchActivities() {
  return apiGet(routes.activities.index())
}

export function createActivity(activity: Object) {
  return apiPostFormData(routes.activities.create(), activity)
}
