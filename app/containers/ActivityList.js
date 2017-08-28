//@flow
import { connect } from 'react-redux'
import ActivityList from 'Closies/app/components/ActivityList'
import { getFilteredActivities } from 'Closies/app/reducers/selectors/App'
import { getActivitiesDenormalized } from 'Closies/app/reducers/selectors/Data'

export const mapStateToProps = (state: Object): Object => {
  const justActivities = getFilteredActivities(state)
  const activities = getActivitiesDenormalized(state, justActivities.map(x => x.id))
  return { activities }
}

export const mapDispatchToProps = (_dispatch: Function): Object => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList)
