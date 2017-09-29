//@flow
import * as entities from 'Closies/app/schemas/Entities'
import _ from 'lodash'

export const groupsSchema = (function groupsSchema() {
  const e = _.cloneDeep(entities)
  e.group.define({user_in_groups: [e.user_in_group]})
  e.user_in_group.define({user: e.user})
  return e
}())
