//@flow
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Orientation from 'react-native-orientation'
import createSagaMiddleware from 'redux-saga'
import AppReducer from 'Closies/app/reducers'
import sagas from 'Closies/app/sagas'
import { createLogger } from 'redux-logger'
import Root from 'Closies/app/containers/Root'

const logger = createLogger({
  collapsed: true,
  actionTransformer: (action) => ({type: action.type, ...action.payload})
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(AppReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(sagas, store.dispatch)

console.disableYellowBox = true

export default class App extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait()
  }

  render() {
    return <Provider store={store}>
      <Root />
    </Provider>
  }
}
