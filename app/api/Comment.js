//@flow
import { routes } from 'Closies/app/__config/Api'
import { apiPost } from 'Closies/app/api/__helpers'

export function createComment(comment: Object) {
  return apiPost(routes.comments.create(), comment)
}
