//@flow
import { routes } from 'Closies/app/__config/Config'
import { apiGet, apiPost } from 'Closies/app/api/__helpers'

export function fetchCheckIns(user: Object) {
  return apiGet(routes.check_ins.index())
}

export function createCheckIn(checkIn: Object) {
  return apiPost(routes.check_ins.create(), {check_in: checkIn})
}
