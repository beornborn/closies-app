//@flow
import { perform as fetchActivities } from 'Closies/app/sagas/activities/FetchActivities'
import { sleep } from 'Closies/app/utils/Common'
import AreaConfig from 'Closies/app/__config/Area'

export const perform = function* perform(): Generator<*,*,*> {
  while (true) {
    yield fetchActivities()
    yield sleep(AreaConfig.POLL_INTERVAL)
  }
}
