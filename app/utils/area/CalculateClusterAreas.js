//@flow
import { Dimensions } from 'react-native'
import AreaConfig from 'Closies/app/__config/Area'
import _ from 'lodash'

const calculateClusterAreas = (focus: Object): Array<Object> => {
  const { height, width } = Dimensions.get('window')
  const clusterWidth = AreaConfig.CLUSTER_WIDTH
  const clusterHeight = clusterWidth * height / width
  const heightAmount = Math.floor(height / clusterHeight)
  const widthAmount = Math.floor(width / clusterWidth)

  const { minLat, minLong, maxLat, maxLong } = focus
  const latDelta = _.max([maxLat - minLat, AreaConfig.MIN_VISIBLE_DISTANCE])
  const longDelta = _.max([maxLong - minLong, AreaConfig.MIN_VISIBLE_DISTANCE])
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

export default calculateClusterAreas
