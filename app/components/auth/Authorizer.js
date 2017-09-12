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

  componentDidMount() {
    this.authorize()
  }

  componentDidUpdate(prevProps: Object) {
    const userChanged = prevProps.user.id !== this.props.user.id
    const routeChanged = prevProps.currentRoute.routeName !== this.props.currentRoute.routeName
    if (userChanged || routeChanged) this.authorize()
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
    return null
  }
}
