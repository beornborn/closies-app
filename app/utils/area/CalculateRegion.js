//@flow
import _ from 'lodash'
import AreaConfig from 'Closies/app/__config/Area'
import calculateFocus from 'Closies/app/utils/area/CalculateFocus'

const calculateRegion = (activities: Array<Object>, defaultCoords: Object): Object => {
  const focus = calculateFocus(activities)
  const { minLat, minLong, maxLat, maxLong } = focus

  return {
    latitude: (minLat + maxLat) / 2.0 || defaultCoords.latitude,
    longitude: (minLong + maxLong) / 2.0 || defaultCoords.longitude,
    latitudeDelta: _.max([(maxLat - minLat) * AreaConfig.EXPAND_VISIBLE_AREA_COEFF, AreaConfig.MIN_VISIBLE_DISTANCE]),
    longitudeDelta: _.max([(maxLong - minLong) * AreaConfig.EXPAND_VISIBLE_AREA_COEFF, AreaConfig.MIN_VISIBLE_DISTANCE]),
  }
}

export default calculateRegion
