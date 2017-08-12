//@flow
import React from 'react'
import pt from 'prop-types'
import { addNavigationHelpers } from 'react-navigation'
import { AllNavigators } from 'Closies/app/Router'

export default class Root extends React.Component {
  static propTypes = {
    initialized: pt.bool.isRequired,
    nav: pt.object.isRequired,
    doAuthenticate: pt.func.isRequired,
    dispatch: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.doAuthenticate()
  }

  render() {
    const { initialized } = this.props

    const navHelpers = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })

    return (initialized ? <AllNavigators navigation={navHelpers} /> : null)
  }
}



