//@flow
import _ from 'lodash'

const calculateMostCentralActivity = (activities: Array<Object>, bounds: Object) => {
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

export default calculateMostCentralActivity
