//@flow

const config = {
  MIN_CLOSEST_DISTANCE_BETWEEN_ACTIVITIES: 0.0006,
  MIN_VISIBLE_DISTANCE: 0.002,
  CLUSTER_WIDTH: 120,
  CIRCLE: {
    diameter: 40,
    notification: {
      empty: 2,
      dashed: 2
    },
    totalDiameter: 0
  },
  EXPAND_VISIBLE_AREA_COEFF: 1.1,
  POLL_INTERVAL: 60000,
}

config.CIRCLE.totalDiameter = config.CIRCLE.diameter +
  config.CIRCLE.notification.empty * 2 +
  config.CIRCLE.notification.dashed * 2

export default config
