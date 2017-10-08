//@flow
import React from 'react'
import pt from 'prop-types'
import { addNavigationHelpers } from 'react-navigation'
import { AllNavigators } from 'Closies/app/__config/routes'
import BackButton from 'Closies/app/containers/BackButton'
import Authorizer from 'Closies/app/containers/auth__authorizer/Authorizer'
import { Container } from './Root.style'

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

    if (!initialized) return null

    return <Container>
      <BackButton />
      <Authorizer />
      <AllNavigators navigation={navHelpers} />
    </Container>
  }
}
