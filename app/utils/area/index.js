//@flow
import _ from 'lodash'
import calculateClusterAreas from 'Closies/app/utils/area/CalculateClusterAreas'
import calculateFocus from 'Closies/app/utils/area/CalculateFocus'
import handleClustersNature from 'Closies/app/utils/area/HandleClustersNature'

export const calculateAreaData = (activities: Array<Object>, location: Object) => {
  const focus = calculateFocus(activities, location.coords)
  const clusters = calculateClusters(activities, focus)
  return { clusters, region: focus.region }
}

export const calculateClusters = (activities: Array<Object>, focus: Object) => {
  const clusterAreas = calculateClusterAreas(focus)
  const clusters = clusterAreas.map(ca => ({
    activities: [],
    longitude: null,
    latitude: null,
    bounds: ca,
  }))

  for (const a of activities) {
    for (const c of clusters) {
      const inLeftBound = a.longitude >= c.bounds.left
      const inRightBound = a.longitude <= c.bounds.right
      const inBottomBound = a.latitude >= c.bounds.bottom
      const inTopBound = a.latitude <= c.bounds.top

      if (inLeftBound && inRightBound && inBottomBound && inTopBound) {
        c.activities.push(a)
        break
      }
    }
  }

  const handledClusters = handleClustersNature(_.compact(clusters), focus)

  return _.compact(handledClusters)
}
