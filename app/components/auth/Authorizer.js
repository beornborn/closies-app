//@flow
import React from 'react'
import pt from 'prop-types'
import { Actions } from 'react-native-router-flux'
import Acl from 'Closies/app/components/auth/Acl'
import _ from 'lodash'

export default class Authorizer extends React.Component {
  static propTypes = {
    Component: pt.oneOfType([pt.element, pt.func]).isRequired,
    user: pt.object.isRequired,
  }

  componentWillMount() { this.authorize() }
  componentDidUpdate() { this.authorize() }

  authorize() {
    const { Component } = this.props
    const componentName = this.componentName(Component)

    if (!this.isAuthorized()) {
      switch (componentName) {
        case 'WithFooter': return Actions.home()
        case 'Home': return Actions.mapp()
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

    if (this.isAuthorized()) {
      return <Component {..._.omit(this.props, ['user', 'Component'])} />
    }
    return null
  }
}
