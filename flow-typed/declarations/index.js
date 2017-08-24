declare var console: any

type Action = {type: string, payload: Object}
type MethodType = 'GET' | 'POST' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PUT' | 'PATCH'
type Region = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}

declare module 'react-navigation' {
  declare module.exports: any;
}
