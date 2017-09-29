//@flow
import { denormalize } from 'normalizr'

export const denormalizedActivities = (ids: Array<any>, data: Object, e: any): Array<Object> => (
  denormalize({activities: ids}, {activities: [e.activity]}, data).activities
)
export const denormalizedGroups = (ids: Array<any>, data: Object, e: any): Array<Object> => (
  denormalize({groups: ids}, {groups: [e.group]}, data).groups
)
