//@flow
import * as entities from 'Closies/app/reducers/schemas/Entities'
import _ from 'lodash'

const e: Object = _.cloneDeep(entities)

e.activity.define({
  user_in_group: e.user_in_group
})
e.user_in_group.define({
  user: e.user,
  group: e.group,
})
e.group.define({
  user_in_groups: [e.user_in_group]
})

export default e
