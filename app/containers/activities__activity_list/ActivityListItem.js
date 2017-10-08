//@flow
import { connect } from 'react-redux'
import ActivityListItem from 'Closies/app/components/activities__activity_list/ActivityListItem'
import { setSelectedActivityId } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function, props: Object): Object => ({
  goToActivity: () => {
    dispatch(setSelectedActivityId(props.activity.id))
    dispatch(NavigationActions.navigate({routeName: 'Activity'}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityListItem)
