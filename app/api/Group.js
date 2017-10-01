//@flow
import { routes } from 'Closies/app/__config/Config'
import { apiPost, apiGet, apiDelete } from 'Closies/app/api/__helpers'

export function createGroup(params: Object) {
  return apiPost(routes.groups.create(), params)
}
export function deleteGroup(id: number) {
  return apiDelete(routes.groups.delete(id))
}
export function fetchGroups() {
  return apiGet(routes.groups.index())
}
