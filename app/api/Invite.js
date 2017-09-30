//@flow
import { routes } from 'Closies/app/__config/Config'
import { apiPost } from 'Closies/app/api/__helpers'

export function createInvite(groupId: number) {
  return apiPost(routes.invites.create(), {group_id: groupId})
}
