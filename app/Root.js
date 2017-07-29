// @flow
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Orientation from 'react-native-orientation'
import { Router, Scene } from 'react-native-router-flux'
import createSagaMiddleware from 'redux-saga'
import Home from 'Closies/app/containers/Home'
import Mapp from 'Closies/app/containers/Map'
import AppReducer from 'Closies/app/reducers'
import sagas from 'Closies/app/sagas'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  actionTransformer: (action) => ({type: action.type, ...action.payload})
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(AppReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(sagas, store.dispatch)

export default class Root extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root' hideNavBar={true} >
            <Scene key='home' component={Home} />
            <Scene key='mapp' component={Mapp} initial={true} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
