//@flow
import _ from 'lodash'
import AreaConfig from 'Closies/app/__config/Area'
import handleClustersOverlap from 'Closies/app/utils/area/HandleClustersOverlap'
import calculateClusterAreas from 'Closies/app/utils/area/CalculateClusterAreas'
import calculateRegion from 'Closies/app/utils/area/CalculateRegion'
import calculateFocus from 'Closies/app/utils/area/CalculateFocus'
import calculateMostCentralActivity from 'Closies/app/utils/area/CalculateMostCentralActivity'

export const calculateAreaData = (activities: Array<Object>, location: Object) => {
  const focus = calculateFocus(activities)
  const clusterAreas = calculateClusterAreas(focus)
  const region = calculateRegion(activities, location.coords)
  const clusters = calculateClusters(activities, clusterAreas)
  return { clusters, region }
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

  let handledCLusters = clusters.map(c => {
    if (c.activities.length === 0) return undefined
    if (c.activities.length === 1) return c.activities[0]

    const centralActivity = calculateMostCentralActivity(c.activities, c.bounds)
    const cluster = {
      bounds: c.bounds,
      longitude: centralActivity.longitude,
      latitude: centralActivity.latitude,
      activities: c.activities,
    }
    return cluster
  })

  handledCLusters = handleClustersOverlap(_.compact(handledCLusters))
  console.log('handledCLusters', handledCLusters)
  return handledCLusters
}
