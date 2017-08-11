//@flow
import { routes } from 'Closies/app/__config/Config'
import { apiPost } from 'Closies/app/api/__helpers'

export function login(fbToken: string) {
  return apiPost(routes.auth.login(), {fb_token: fbToken})
}

export function logout() {
  return apiPost(routes.auth.logout())
}
