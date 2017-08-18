//@flow
import _ from 'lodash'

export const calculateRegion = (activities: Array<Object>): Object => {
  const allLats = activities.map(x => x.latitude)
  const allLongs = activities.map(x => x.longitude)
  const minLat = _.min(allLats)
  const maxLat = _.max(allLats)
  const minLong = _.min(allLongs)
  const maxLong = _.max(allLongs)
  return {
    latitude: (minLat + maxLat) / 2.0 || 0,
    longitude: (minLong + maxLong) / 2.0 || 0,
    latitudeDelta: (maxLat - minLat) * 1.4 || 0.05,
    longitudeDelta: (maxLong - minLong) * 1.4 || 0.05,
  }
}
