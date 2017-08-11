//@flow
import { connect } from 'react-redux'
import Authorizer from 'Closies/app/components/auth/Authorizer'
import { getCurrentUser } from 'Closies/app/reducers/selectors/Data'

const authorize = (Component: Object) => {
  const mapStateToProps = (state: Object): Object => {
    return {
      Component,
      user: getCurrentUser(state),
    }
  }

  return connect(mapStateToProps, null)(Authorizer)
}

export default authorize
