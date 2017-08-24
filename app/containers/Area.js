//@flow
import { connect } from 'react-redux'
import Area from 'Closies/app/components/Area'
import { getAreaData } from 'Closies/app/reducers/selectors/App'
import { getForceRerender } from 'Closies/app/reducers/selectors/Ui'
import { createActivity, fetchActivities } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (state: Object): Object => ({
  area: getAreaData(state),
  forceRerender: getForceRerender(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    createActivity: () => dispatch(createActivity()),
    fetchActivities: () => dispatch(fetchActivities()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Area)
