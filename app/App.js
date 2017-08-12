//@flow
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-material-ui'
import Orientation from 'react-native-orientation'

import Root from 'Closies/app/containers/Root'
import store from 'Closies/app/Store'

export default class App extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait()
  }

  render() {
    return <Provider store={store}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Provider>
  }
}
