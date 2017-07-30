//@flow
import { connect } from 'react-redux'
import Mapp from 'Closies/app/components/Map'
import { getActivities } from 'Closies/app/reducers/selectors/Data'
import { activity, fetchActivities } from 'Closies/app/reducers/Saga'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state: Object): Object => ({
  activities: getActivities(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({ doActivity: activity, fetchActivities }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Mapp)
