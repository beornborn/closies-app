//@flow
import { connect } from 'react-redux'
import Activity from 'Closies/app/components/activities__activity/Activity'
import { getSelectedActivityDenormalized, getCurrentUserId } from 'Closies/app/reducers/selectors/App'
import { setSelectedUserId } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'
import { checkActivity } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (state: Object): Object => ({
  activity: getSelectedActivityDenormalized(state),
  currentUserId: getCurrentUserId(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  checkActivity: (activity: Object) => dispatch(checkActivity(activity)),
  goToUser: (id: number | string) => {
    dispatch(setSelectedUserId(id))
    dispatch(NavigationActions.navigate({routeName: 'ViewProfile'}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Activity)
