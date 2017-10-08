//@flow
import { routes } from 'Closies/app/__config/Api'
import { apiGet, apiPut } from 'Closies/app/api/__helpers'

export function fetchCurrentUser() {
  return apiGet(routes.users.current())
}
export function updateUser(params: Object) {
  return apiPut(routes.users.update(), params)
}
