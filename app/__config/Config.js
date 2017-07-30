//@flow
const serverUrl = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'https://closies.herokuapp.com'

export const api = {
  serverUrl,
  url: `${serverUrl}/api/`,
}

export const routes = {
  activities: {
    index: () => `v1/activities`,
    create: () => `v1/activities`,
  },
}

const config = { api, routes }
export default config
