//@flow
import { routes } from 'Closies/app/__config/Config'
import { apiGet, apiPost } from 'Closies/app/api/__helpers'

export function fetchCheckIns(user: Object) {
  return apiGet(routes.activities.index())
}

export function createCheckIn(activity: Object) {
  return apiPost(routes.activities.create(), {activity})
}
