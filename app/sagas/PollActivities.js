//@flow
import { perform as fetchActivities } from 'Closies/app/sagas/FetchActivities'
import { sleep } from 'Closies/app/utils/Common'

export const perform = function* perform(): Generator<*,*,*> {
  while (true) {
    yield fetchActivities()
    yield sleep(30000)
  }
}
