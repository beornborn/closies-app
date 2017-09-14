//@flow
import { connect } from 'react-redux'
import ViewProfileEditButton from 'Closies/app/components/profile/ViewProfileEditButton'
import { getCurrentUserId, getSelectedUserId } from 'Closies/app/reducers/selectors/App'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (state: Object): Object => ({
  isCurrentUser: getCurrentUserId(state) === getSelectedUserId(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToEditProfile: () => dispatch(NavigationActions.navigate({routeName: 'EditProfile'}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfileEditButton)
