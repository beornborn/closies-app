//@flow
import { takeEvery } from 'redux-saga/effects'
import { SAGA_FACEBOOK_LOGIN } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import FBSDK from 'react-native-fbsdk'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'
import { perform as authenticate } from 'Closies/app/sagas/auth/Authenticate'
import { apiCallWrapper } from 'Closies/app/utils/ApiHandlers'

const getFacebookToken = () => {
  return new Promise(resolve =>
    FBSDK.AccessToken.getCurrentAccessToken().then((data) =>
      resolve((data || {}).accessToken.toString())
    )
  )
}

const perform = function* perform(_a) {
  try {
    const permissions = ['public_profile', 'email', 'user_birthday']
    const result = yield FBSDK.LoginManager.logInWithReadPermissions(permissions)
    if (result.isCancelled) {
      console.log('Login cancelled')
    } else {
      const fbToken = yield getFacebookToken()
      const response = yield apiCallWrapper(() => api.login(fbToken))
      if (response.status === 'Success') {
        yield AsyncStorage.setAuthToken(response.data.auth_token)
        yield authenticate()
      }
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_FACEBOOK_LOGIN, perform)
}

export default watch
