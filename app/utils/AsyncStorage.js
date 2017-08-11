//@flow
import { AsyncStorage as storage } from 'react-native'

const AsyncStorage = {
  getAuthToken: () => storage.getItem('closies::authToken'),
  setAuthToken: (authToken: ?string) => {
    if (authToken) {
      storage.setItem('closies::authToken', authToken)
    } else {
      storage.removeItem('closies::authToken')
    }
  }
}

export default AsyncStorage
