//@flow
import React from 'react'
import pt from 'prop-types'
import { Router, Scene } from 'react-native-router-flux'
import Home from 'Closies/app/containers/Home'
import Mapp from 'Closies/app/containers/Map'
import authorize from 'Closies/app/containers/auth/Authorizer'
import withFooter from 'Closies/app/containers/WithFooter'

export default class Root extends React.Component {
  static propTypes = {
    doAuthenticate: pt.func.isRequired,
    initialized: pt.bool.isRequired,
  }

  componentDidMount() {
    this.props.doAuthenticate()
  }

  render() {
    const { initialized } = this.props

    return (
      initialized ? <Router>
        <Scene key='root' hideNavBar={true} >
          <Scene key='home' component={authorize(Home)} />
          <Scene key='mapp' component={authorize(withFooter(Mapp))} initial={true} />
        </Scene>
      </Router> : null
    )
  }
}
