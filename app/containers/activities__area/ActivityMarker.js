//@flow
import { connect } from 'react-redux'
import ActivityMarker from 'Closies/app/components/activities__area/ActivityMarker'
import { setSelectedActivityId } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    goToActivity: (id: number) => {
      dispatch(setSelectedActivityId(id))
      dispatch(NavigationActions.navigate({routeName: 'Activity'}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityMarker)
