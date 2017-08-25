//@flow
import { connect } from 'react-redux'
import BackButton from 'Closies/app/components/BackButton'
import { NavigationActions } from 'react-navigation'
import { getCurrentRoute } from 'Closies/app/reducers/selectors/App'
import { getFilterSelectedActivityIds } from 'Closies/app/reducers/selectors/Ui'
import { setSelectedActivitiesFilter } from 'Closies/app/reducers/Ui'

export const mapStateToProps = (state: Object): Object => ({
  currentRoute: getCurrentRoute(state),
  activityIds: getFilterSelectedActivityIds(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goBack: () => dispatch(NavigationActions.back()),
  goToCluster: (activity_ids: Array<number>) => dispatch(setSelectedActivitiesFilter(activity_ids)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BackButton)
