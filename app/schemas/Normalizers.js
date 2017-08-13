//@flow
import { schema } from 'normalizr'
import * as entities from 'Closies/app/schemas/Entities'
import _ from 'lodash'

const e: Object = _.cloneDeep(entities)

e.activity.define({
  user: e.user
})

export default e
