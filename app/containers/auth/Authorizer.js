//@flow
import { connect } from 'react-redux'
import Authorizer from 'Closies/app/components/auth/Authorizer'
import { getCurrentUser, getCurrentRoute } from 'Closies/app/reducers/selectors/App'
import { NavigationActions } from 'react-navigation'

const mapStateToProps = (state: Object): Object => {
  return {
    user: getCurrentUser(state),
    currentRoute: getCurrentRoute(state),
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  navigate: (routeName: string) => dispatch(NavigationActions.navigate({routeName}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Authorizer)
