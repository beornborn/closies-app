//@flow
import { connect } from 'react-redux'
import BackButton from 'Closies/app/components/BackButton'
import { NavigationActions } from 'react-navigation'
import { getFilterSelectedActivityIds, getCurrentRoute } from 'Closies/app/reducers/selectors/App'
import { setSelectedActivitiesFilter } from 'Closies/app/reducers/App'
import { batchActions } from 'redux-batched-actions'

export const mapStateToProps = (state: Object): Object => ({
  currentRoute: getCurrentRoute(state),
  activityIds: getFilterSelectedActivityIds(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goBack: () => dispatch(NavigationActions.back()),
  goReset: () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Area'})
      ]
    })
    const batchedAction = batchActions([resetAction, setSelectedActivitiesFilter([])])
    dispatch(batchedAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BackButton)
