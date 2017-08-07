//@flow
import { takeEvery } from 'redux-saga/effects'
import { SAGA_FACEBOOK_LOGIN } from 'Closies/app/reducers/Saga'
import * as api from 'Closies/app/api'
import FBSDK from 'react-native-fbsdk'
import AsyncStorage from 'Closies/app/utils/AsyncStorage'
import { perform as fetchCurrentUser } from 'Closies/app/sagas/FetchCurrentUser'

const getFacebookToken = () => {
  return new Promise(resolve =>
    FBSDK.AccessToken.getCurrentAccessToken().then((data) =>
      resolve((data || {}).accessToken.toString())
    )
  )
}

const perform = function* perform(a) {
  try {
    const { error, result } = a.payload

    if (error) {
      console.log('login has error: ' + result.error)
    } else if (result.isCancelled) {
      console.log('login is cancelled.')
    } else {
      const fbToken = yield getFacebookToken()
      const response = yield api.login(fbToken)
      yield AsyncStorage.setAuthToken(response.auth_token)
      yield fetchCurrentUser()
    }
  } catch (err) { console.log(err) }
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_FACEBOOK_LOGIN, perform)
}

export default watch

