//@flow
import { schema } from 'normalizr'
import _ from 'lodash'

export const user = new schema.Entity('users')
export const activity = new schema.Entity('activities', {}, {
  processStrategy: (a: Object) => {
    return {...a, latlng: _.pick(a, ['latitude', 'longitude'])}
  }
})
