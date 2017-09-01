//@flow
import React from 'react'
import pt from 'prop-types'
import Acl from 'Closies/app/components/auth/Acl'

export default class Authorizer extends React.Component {
  static propTypes = {
    user: pt.object.isRequired,
    currentRoute: pt.object.isRequired,
    navigate: pt.func.isRequired,
  }

  shouldComponentUpdate(nextProps: Object) {
    const userChanged = nextProps.user.id !== this.props.user.id
    const routeChanged = nextProps.currentRoute.routeName !== this.props.currentRoute.routeName
    return userChanged || routeChanged
  }

  authorize = () => {
    const { user, currentRoute, navigate } = this.props

    const authorizer = Acl[currentRoute.routeName]

    if (!authorizer(user)) {
      switch (currentRoute.routeName) {
        case 'Login': return navigate('Area')
        default: return navigate('Login')
      }
    }
  }

  render() {
    this.authorize()
    return null
  }
}
