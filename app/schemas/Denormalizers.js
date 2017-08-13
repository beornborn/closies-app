//@flow
import { denormalize } from 'normalizr'

export const denormalizedActivities = (ids: Array<any>, data: Object, e: any): Array<Object> => (
  denormalize({activities: ids}, {activities: [e.activity]}, data).activities
)
