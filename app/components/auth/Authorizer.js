//@flow
import React from 'react'
import pt from 'prop-types'
import Acl from 'Closies/app/components/auth/Acl'

export default class Authorizer extends React.Component {
  static propTypes = {
    Component: pt.oneOfType([pt.element, pt.func]).isRequired,
    user: pt.object.isRequired,
    navigation: pt.object.isRequired,
    currentRoute: pt.string.isRequired,
  }

  componentWillMount() { this.authorize() }
  componentDidUpdate() { this.authorize() }

  authorize() {
    const { Component, navigation, currentRoute } = this.props
    const componentName = this.componentName(Component)
    console.log(componentName, this.isAuthorized(), currentRoute)

    if (currentRoute === componentName && !this.isAuthorized()) {
      switch (componentName) {
        case 'Area': return navigation.navigate('Login')
        case 'Settings': return navigation.navigate('Login')
        case 'Login': return navigation.navigate('Area')
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
    const { Component, navigation } = this.props

    return <Component navigation={navigation} />
  }
}
