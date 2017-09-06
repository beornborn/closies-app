//@flow

const calculateClusterAreas = (focus: Object): Array<Object> => {
  const { minLat, minLong, longStep, latStep, clusterHeightAmount, clusterWidthAmount } = focus

  const clusterAreas = []
  for (let x = 0; x < clusterHeightAmount; x += 1) {
    for (let y = 0; y < clusterWidthAmount; y += 1) {
      const left = minLong + y * longStep
      const right = minLong + (y + 1) * longStep
      const bottom = minLat + x * latStep
      const top = minLat + (x + 1) * latStep

      clusterAreas.push({bottom, left, top, right})
    }
  }

  return clusterAreas
}

export default calculateClusterAreas
