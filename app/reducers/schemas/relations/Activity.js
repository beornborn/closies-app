//@flow
import * as entities from 'Closies/app/reducers/schemas/Entities'
import _ from 'lodash'

export const activitiesSchema = (function activitiesSchema() {
  const e = _.cloneDeep(entities)
  e.activity.define({user_in_group: e.user_in_group})
  e.activity.define({checked: [e.user]})
  e.user_in_group.define({user: e.user})
  return e
}())
