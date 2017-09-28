//@flow
import { routes } from 'Closies/app/__config/Config'
import { apiGet } from 'Closies/app/api/__helpers'

export function fetchConfig() {
  return apiGet(routes.config.index())
}
