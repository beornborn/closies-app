//@flow
const serverUrl = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'http://api.closies.co'

export const api = {
  serverUrl,
  url: `${serverUrl}/api/`,
}

export const routes = {
  config: {
    index: () => 'v1/config',
  },
  activities: {
    index: () => 'v1/activities',
    create: () => 'v1/activities',
  },
  auth: {
    login: () => 'v1/auth/login',
    logout: () => 'v1/auth/logout',
  },
  users: {
    current: () => 'v1/users/current',
    update: () => 'v1/users',
  },
  groups: {
    create: () => 'v1/groups',
    index: () => 'v1/groups',
  },
  invites: {
    create: () => 'v1/invites',
  },
}

const config = { api, routes }
export default config
