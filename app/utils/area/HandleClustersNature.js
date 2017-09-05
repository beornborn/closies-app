//@flow
import calculateMostCentralActivity from 'Closies/app/utils/area/CalculateMostCentralActivity'
import AreaConfig from 'Closies/app/__config/Area'

const calculateClusterAvailableBounds = (cluster: Object, focus: Object) => {
  const circleRadiusLat = (AreaConfig.CIRCLE.totalDiameter / 2.0) * focus.pxInLat
  const circleRadiusLong = (AreaConfig.CIRCLE.totalDiameter / 2.0) * focus.pxInLong

  return {
    bottom: cluster.bounds.bottom + circleRadiusLat,
    left: cluster.bounds.left + circleRadiusLong,
    top: cluster.bounds.top - circleRadiusLat,
    right: cluster.bounds.right - circleRadiusLong,
  }
}

const handleClustersNature = (sourceClusters: Array<Object>, focus: Object) => {
  return sourceClusters.map(c => {
    if (c.activities.length === 0) return undefined

    const centralActivity = calculateMostCentralActivity(c.activities, c.bounds)
    const availableBounds = calculateClusterAvailableBounds(c, focus)

    let latitude = 0
    if (centralActivity.latitude > availableBounds.top) {
      latitude = availableBounds.top
    } else if (centralActivity.latitude < availableBounds.bottom) {
      latitude = availableBounds.bottom
    } else {
      latitude = centralActivity.latitude
    }

    let longitude = 0
    if (centralActivity.longitude > availableBounds.right) {
      longitude = availableBounds.right
    } else if (centralActivity.longitude < availableBounds.left) {
      longitude = availableBounds.left
    } else {
      longitude = centralActivity.longitude
    }

    return {
      bounds: c.bounds,
      longitude,
      latitude,
      activities: c.activities,
    }
  })
}

export default handleClustersNature
