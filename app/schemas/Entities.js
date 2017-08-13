//@flow
import { schema } from 'normalizr'
import { handleActivity } from 'Closies/app/utils/ApiHandlers'

export const user = new schema.Entity('users')
export const activity = new schema.Entity('activities', {}, {
  processStrategy: handleActivity
})
