//@flow
import { connect } from 'react-redux'
import ClusterMarker from 'Closies/app/components/ClusterMarker'
import { setSelectedActivitiesFilter } from 'Closies/app/reducers/Ui'
import _ from 'lodash'
import { NavigationActions } from 'react-navigation'
import AreaConfig from 'Closies/app/__config/Area'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    goToCluster: (activities: Array<Object>) => {
      const lats = activities.map(x => x.latitude)
      const longs = activities.map(x => x.longitude)
      const latDiff = _.max(lats) - _.min(lats)
      const longDiff = _.max(longs) - _.min(longs)
      const minDistance = AreaConfig.MIN_CLOSEST_DISTANCE_BETWEEN_ACTIVITIES

      dispatch(setSelectedActivitiesFilter(activities.map(x => x.id)))
      if (latDiff <= minDistance && longDiff <= minDistance) {
        dispatch(NavigationActions.navigate({routeName: 'ActivityList'}))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClusterMarker)
