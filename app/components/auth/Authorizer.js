//@flow
import React from 'react'
import pt from 'prop-types'
import Acl from 'Closies/app/components/auth/Acl'

export default class Authorizer extends React.Component {
  static propTypes = {
    Component: pt.oneOfType([pt.element, pt.func]).isRequired,
    user: pt.object.isRequired,
    navigation: pt.object.isRequired,
  }

  state = {authorized: false}

  componentWillMount() { this.authorize() }
  componentDidUpdate() { this.authorize() }

  authorize() {
    const { Component, navigation } = this.props
    const componentName = this.componentName(Component)

    if (!this.isAuthorized()) {
      switch (componentName) {
        case 'Area': return navigation.navigate('Login')
        case 'Login': return navigation.navigate('Area')
      }
    } else if (!this.state.authorized) {
      this.setState({authorized: true})
    }
  }

  componentName(Component: Object) {
    if (Component.WrappedComponent) {
      return Component.WrappedComponent.name
    }

    return Component.name
  }

  isAuthorized() {
    const { user, Component } = this.props
    const componentName = this.componentName(Component)
    const authorizer = Acl[componentName]

    return authorizer(user)
  }

  render() {
    const { Component, navigation } = this.props

    return <Component navigation={navigation} />
  }
}
