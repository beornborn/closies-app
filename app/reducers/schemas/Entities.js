//@flow
import { schema } from 'normalizr'
import { handleActivity } from 'Closies/app/utils/ApiHandlers'

export const user_in_group = new schema.Entity('user_in_groups')
export const user = new schema.Entity('users')
export const group = new schema.Entity('groups')
export const comment = new schema.Entity('comments')
export const activity = new schema.Entity('activities', {}, {
  processStrategy: handleActivity
})
