//@flow
import { connect } from 'react-redux'
import CurrentInvite from 'Closies/app/components/group_view/CurrentInvite'
import { getCurrentInvite } from 'Closies/app/reducers/selectors/App'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (state: Object): Object => ({
  invite: getCurrentInvite(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goBack: () => dispatch(NavigationActions.back())
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentInvite)
