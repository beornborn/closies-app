//@flow
import _ from 'lodash'
import { api } from 'Closies/app/__config/Config'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'

export function checkStatus(response: Object) {
  const status = response.status

  if (_.range(200, 300).includes(status)) {
    return response
  }

  const error = new Error(response.statusText)
  return response.json()
    .then(r => {
      error.message = r.error
      return error
    })
    .catch(e => {
      error.message = 'Server Error'
      console.log(e)
      return error
    })
    .then(e => { throw e })
}

export function logResponse(response: Object) {
  console.log('----------------------', response)
  return response
}

export function parseJSON(response: Object) {
  return response.text().then(text => {
    if (text === '') return new Promise((resolve,_reject) => { resolve({}) })

    const json = JSON.parse(text)
    return new Promise((resolve,_reject) => { resolve(json) })
  })
}

function handleResponse(response: Object) {
  return response
    .then(checkStatus)
    .then(logResponse)
    .then(parseJSON)
    .catch(e => {
      if (e.response) throw e
      console.log('------------------', e)
      const error = new Error('Bad Connection')
      error.message = 'Check your internet connection'
      throw error
    })
}

export async function apiPostFormData(path: string, params: Object) {
  const authToken = await AsyncStorage.getAuthToken()
  const formData = new FormData()
  // files.map((file) => formData.append('files[]', file))
  _.keys(params).forEach(key => {
    if (_.isArray(params[key])) {
      params[key].forEach(value => {
        formData.append(`${key}[]`, value)
      })
    } else {
      formData.append(key, params[key])
    }
  })

  const settings: Object = {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    headers: {'X-API-AUTHTOKEN': authToken},
    body: formData
  }

  const response = handleResponse(fetch(`${api.url}${path}`, settings))
  return response
}

async function request(path: string, payload: Object, method: MethodType) {
  const authToken = await AsyncStorage.getAuthToken()
  const settings: Object = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-API-AUTHTOKEN': authToken,
    }
  }

  if (method !== 'GET') { settings.body = JSON.stringify(payload) }
  const response = handleResponse(fetch(`${api.url}${path}`, settings))
  return response
}

export function apiGet(path: string, payload: Object = {}) {
  return request(path, payload, 'GET')
}

export function apiPost(path: string, payload: Object = {}) {
  return request(path, payload, 'POST')
}

export function apiPut(path: string, payload: Object = {}) {
  return request(path, payload, 'PUT')
}

export function apiDelete(path: string, payload: Object = {}) {
  return request(path, payload, 'DELETE')
}
