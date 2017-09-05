//@flow
import calculateMostCentralActivity from 'Closies/app/utils/area/CalculateMostCentralActivity'

const handleClustersNature = (sourceClusters: Array<Object>) => {
  return sourceClusters.map(c => {
    if (c.activities.length === 0) return undefined
    if (c.activities.length === 1) return c.activities[0]

    const centralActivity = calculateMostCentralActivity(c.activities, c.bounds)
    const cluster = {
      bounds: c.bounds,
      longitude: centralActivity.longitude,
      latitude: centralActivity.latitude,
      activities: c.activities,
    }
    return cluster
  })
}

export default handleClustersNature
