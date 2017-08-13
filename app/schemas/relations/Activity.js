//@flow
import * as entities from 'Closies/app/schemas/Entities'
import _ from 'lodash'

export const activitiesSchema = (function activitiesSchema() {
  const e = _.cloneDeep(entities)
  e.activity.define({user: e.user})
  return e
}())
