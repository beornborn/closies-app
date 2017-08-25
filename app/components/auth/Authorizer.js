//@flow
import React from 'react'
import pt from 'prop-types'
import Acl from 'Closies/app/components/auth/Acl'

export default class Authorizer extends React.Component {
  static propTypes = {
    Component: pt.oneOfType([pt.element, pt.func]).isRequired,
    user: pt.object.isRequired,
    navigation: pt.object.isRequired,
    currentRoute: pt.object.isRequired,
  }

  componentWillMount() { this.authorize() }
  componentDidUpdate() { this.authorize() }

  authorize() {
    const { Component, navigation, currentRoute } = this.props
    const componentName = this.componentName(Component)

    if (currentRoute.routeName === componentName && !this.isAuthorized()) {
      switch (componentName) {
        case 'Login': return navigation.navigate('Area')
        default: return navigation.navigate('Login')
      }
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
    const { Component } = this.props

    return <Component />
  }
}
