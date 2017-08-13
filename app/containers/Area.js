//@flow
import { connect } from 'react-redux'
import Area from 'Closies/app/components/Area'
import { getSelectedActivitiesDenormalized } from 'Closies/app/reducers/selectors/Data'
import { createActivity, fetchActivities } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (state: Object): Object => ({
  activities: getSelectedActivitiesDenormalized(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    createActivity: () => dispatch(createActivity()),
    fetchActivities: () => dispatch(fetchActivities()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Area)
