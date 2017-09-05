//@flow
import _ from 'lodash'
import AreaConfig from 'Closies/app/__config/Area'
import handleClustersOverlap from 'Closies/app/utils/area/HandleClustersOverlap'
import calculateClusterAreas from 'Closies/app/utils/area/CalculateClusterAreas'
import calculateFocus from 'Closies/app/utils/area/CalculateFocus'
import handleClustersNature from 'Closies/app/utils/area/HandleClustersNature'

export const calculateAreaData = (activities: Array<Object>, location: Object) => {
  const focus = calculateFocus(activities, location.coords)
  const clusterAreas = calculateClusterAreas(focus)
  const clusters = calculateClusters(activities, clusterAreas)
  return { clusters, region: focus.region }
}

export const calculateClusters = (activities: Array<Object>, clusterAreas: Array<Object>) => {
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

  let handledCLusters = handleClustersNature(clusters)
  handledCLusters = handleClustersOverlap(_.compact(handledCLusters))
  console.log('handledCLusters', handledCLusters)
  return handledCLusters
}
