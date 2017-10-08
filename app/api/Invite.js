//@flow
import { routes } from 'Closies/app/__config/Api'
import { apiPost } from 'Closies/app/api/__helpers'

export function createInvite(groupId: number) {
  return apiPost(routes.invites.create(), {group_id: groupId})
}
export function acceptInvite(token: string) {
  return apiPost(routes.invites.accept(), {token})
}
