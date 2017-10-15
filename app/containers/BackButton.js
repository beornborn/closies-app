//@flow
import { connect } from 'react-redux'
import BackButton from 'Closies/app/components/BackButton'
import { NavigationActions } from 'react-navigation'
import { getActivitiesFilter, getCurrentRoute } from 'Closies/app/reducers/selectors/App'
import { setActivitiesFilter } from 'Closies/app/reducers/App'
import { batchActions } from 'redux-batched-actions'

export const mapStateToProps = (state: Object): Object => ({
  currentRoute: getCurrentRoute(state),
  activityIds: getActivitiesFilter(state).selectedActivityIds,
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
    const batchedAction = batchActions([resetAction, setActivitiesFilter({selectedActivityIds: []})])
    dispatch(batchedAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BackButton)
