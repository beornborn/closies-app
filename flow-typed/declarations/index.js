declare var console: any

type Action = {type: string, payload: Object}
type MethodType = 'GET' | 'POST' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PUT' | 'PATCH'

declare module 'react-navigation' {
  declare module.exports: any;
}
