//@flow
import _ from 'lodash'
import { Dimensions } from 'react-native'

export const calculateRegion = (activities: Array<Object>): Object => {
  const focus = calculateFocus(activities)
  const { minLat, minLong, maxLat, maxLong } = focus

  return {
    latitude: (minLat + maxLat) / 2.0 || 0,
    longitude: (minLong + maxLong) / 2.0 || 0,
    latitudeDelta: (maxLat - minLat) * 1.2 || 0.05,
    longitudeDelta: (maxLong - minLong) * 1.2 || 0.05,
  }
}
export const calculateFocus = (activities: Array<Object>): Object => {
  const allLats = activities.map(x => x.latitude)
  const allLongs = activities.map(x => x.longitude)

  return {
    minLat: _.min(allLats),
    maxLat: _.max(allLats),
    minLong: _.min(allLongs),
    maxLong: _.max(allLongs),
  }
}

export const calculateClusterAreas = (focus: Object): Array<Object> => {
  const { height, width } = Dimensions.get('window')
  const clusterWidth = 120
  const clusterHeight = clusterWidth * height / width
  const heightAmount = Math.floor(height / clusterHeight)
  const widthAmount = Math.floor(width / clusterWidth)

  const { minLat, minLong, maxLat, maxLong } = focus
  const latDelta = maxLat - minLat
  const longDelta = maxLong - minLong
  const latStep = latDelta / heightAmount
  const longStep = longDelta / widthAmount

  const clusterAreas = []
  for (let x = 0; x < heightAmount; x += 1) {
    for (let y = 0; y < widthAmount; y += 1) {
      const left = minLong + y * longStep
      const right = minLong + (y + 1) * longStep
      const bottom = minLat + x * latStep
      const top = minLat + (x + 1) * latStep

      clusterAreas.push({left, bottom, right, top})
    }
  }

  return clusterAreas
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

  const handledCLusters = clusters.map(c => {
    if (c.activities.length === 0) return undefined
    if (c.activities.length === 1) return c.activities[0]

    const centralActivity = getMostCentralActivity(c.activities, c.bounds)
    const cluster = {
      bounds: c.bounds,
      longitude: centralActivity.longitude,
      latitude: centralActivity.latitude,
      activity_ids: c.activities.map(x => x.id),
    }
    return cluster
  })

  return _.compact(handledCLusters)
}

export const getMostCentralActivity = (activities: Array<Object>, bounds: Object) => {
  return _.minBy(activities, a => {
    const latEstimateBottom = Math.pow(a.latitude - bounds.bottom, 2)
    const latEstimateTop = Math.pow(bounds.top - a.latitude, 2)
    const latEstimate = _.max([latEstimateBottom, latEstimateTop])
    const longEstimateBottom = Math.pow(a.longitude - bounds.right, 2)
    const longEstimateTop = Math.pow(bounds.left - a.longitude, 2)
    const longEstimate = _.max([longEstimateBottom, longEstimateTop])
    return _.max([latEstimate, longEstimate])
  })
}
