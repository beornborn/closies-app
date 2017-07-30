//@flow
import { AsyncStorage as storage } from 'react-native'

const AsyncStorage = {
  getAuthToken: () => storage.getItem('closies::authToken'),
  setAuthToken: (authToken: string) => storage.setItem('closies::authToken', authToken),
}

export default AsyncStorage
