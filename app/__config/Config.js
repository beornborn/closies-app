//@flow
const serverUrl = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000'

export const api = {
  serverUrl,
  url: `${serverUrl}/api/`,
}

export const routes = {
  check_ins: {
    index: () => `v1/check_ins`,
    create: () => `v1/check_ins`,
  },
}

const config = { api, routes }
export default config
