//@flow
import _ from 'lodash'
import { Dimensions } from 'react-native'
import AreaConfig from 'Closies/app/__config/Area'

const calculateFocus = (activities: Array<Object>, defaultCoords: Object): Object => {
  const { height, width } = Dimensions.get('window')
  const availableWidth = width / AreaConfig.EXPAND_VISIBLE_AREA_COEFF
  const availableHeight = (height / AreaConfig.EXPAND_VISIBLE_AREA_COEFF) - 50

  const approxClusterWidthPx = AreaConfig.CLUSTER_WIDTH
  const approxClusterHeightPx = approxClusterWidthPx * availableHeight / availableWidth
  const clusterWidthAmount = Math.floor(availableWidth / approxClusterWidthPx)
  const clusterHeightAmount = Math.floor(availableHeight / approxClusterHeightPx)
  const clusterWidthPx = availableWidth / clusterWidthAmount
  const clusterHeightPx = availableHeight / clusterHeightAmount

  const allLats = activities.map(x => x.latitude)
  const allLongs = activities.map(x => x.longitude)

  const minLat = _.min(allLats)
  const maxLat = _.max(allLats)
  const minLong = _.min(allLongs)
  const maxLong = _.max(allLongs)

  const availableLatDelta = _.max([maxLat - minLat, AreaConfig.MIN_VISIBLE_DISTANCE])
  const availableLongDelta = _.max([maxLong - minLong, AreaConfig.MIN_VISIBLE_DISTANCE])
  const latStep = availableLatDelta / clusterHeightAmount
  const longStep = availableLongDelta / clusterWidthAmount
  const pxInLat = availableLatDelta / availableHeight
  const pxInLong = availableLongDelta / availableWidth

  return {
    widthScreen: width,
    heightScreen: height,
    availableWidth,
    availableHeight,
    clusterWidthPx,
    clusterHeightPx,
    clusterWidthAmount,
    clusterHeightAmount,
    minLat,
    maxLat,
    minLong,
    maxLong,
    availableLatDelta,
    availableLongDelta,
    latStep,
    longStep,
    pxInLat,
    pxInLong,
    region: {
      latitude: (minLat + maxLat) / 2.0 || defaultCoords.latitude,
      longitude: (minLong + maxLong) / 2.0 || defaultCoords.longitude,
      latitudeDelta: availableLatDelta * AreaConfig.EXPAND_VISIBLE_AREA_COEFF,
      longitudeDelta: availableLongDelta * AreaConfig.EXPAND_VISIBLE_AREA_COEFF,
    }
  }
}

export default calculateFocus
