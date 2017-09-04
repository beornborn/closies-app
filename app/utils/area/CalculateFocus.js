//@flow
import _ from 'lodash'

const calculateFocus = (activities: Array<Object>): Object => {
  const allLats = activities.map(x => x.latitude)
  const allLongs = activities.map(x => x.longitude)

  return {
    minLat: _.min(allLats),
    maxLat: _.max(allLats),
    minLong: _.min(allLongs),
    maxLong: _.max(allLongs),
  }
}

export default calculateFocus
