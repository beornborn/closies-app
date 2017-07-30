//@flow
import _ from 'lodash'

export const handleActivity = (activity: Object) => {
  return {...activity, latlng: _.pick(activity, ['latitude', 'longitude'])}
}
