//@flow
import * as entities from 'Closies/app/schemas/Entities'
import _ from 'lodash'

const e: Object = _.cloneDeep(entities)

e.activity.define({
  user_in_group: e.user_in_group
})
e.user_in_group.define({
  user: e.user,
  group: e.group,
})

export default e
