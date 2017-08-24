//@flow
import { connect } from 'react-redux'
import ClusterMarker from 'Closies/app/components/ClusterMarker'
import { setSelectedActivitiesFilter } from 'Closies/app/reducers/Ui'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    goToCluster: (activity_ids: Array<number>) => dispatch(setSelectedActivitiesFilter(activity_ids))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClusterMarker)
