//@flow
import { connect } from 'react-redux'
import Area from 'Closies/app/components/Area'
import { getAreaData } from 'Closies/app/reducers/selectors/App'
import { getForceRerender } from 'Closies/app/reducers/selectors/Ui'
import { fetchActivities } from 'Closies/app/reducers/Saga'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (state: Object): Object => ({
  area: getAreaData(state),
  forceRerender: getForceRerender(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    newActivity: () => dispatch(NavigationActions.navigate({routeName: 'NewActivity'})),
    fetchActivities: () => dispatch(fetchActivities()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Area)
