// @flow
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Orientation from 'react-native-orientation'
import { Router, Scene } from 'react-native-router-flux'
import Home from 'Closies/app/containers/Home'
import Mapp from 'Closies/app/components/Map'
import AppReducer from 'Closies/app/reducers'

const store = createStore(AppReducer)

export default class Root extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root' hideNavBar={true} >
            <Scene key='home' initial={true} component={Home} />
            <Scene key='mapp' component={Mapp} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
