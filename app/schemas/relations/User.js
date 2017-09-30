//@flow
import * as entities from 'Closies/app/schemas/Entities'
import _ from 'lodash'

export const usersSchema = (function usersSchema() {
  const e = _.cloneDeep(entities)
  e.user.define({user_in_groups: [e.user_in_group]})
  e.user_in_group.define({group: e.group})
  return e
}())
