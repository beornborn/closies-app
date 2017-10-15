//@flow
import React, { Component } from 'react'
import pt from 'prop-types'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import ClusterMarker from 'Closies/app/containers/activities__area/ClusterMarker'
import ActivityMarker from 'Closies/app/containers/activities__area/ActivityMarker'
import { mapStyle } from 'Closies/app/__config/Theme'
import _ from 'lodash'
import { Container } from './Area.style'

export default class Area extends Component {
  static propTypes = {
    area: pt.shape({
      clusters: pt.arrayOf(pt.object).isRequired,
      region: pt.object.isRequired,
    }).isRequired,
    fetchCurrentLocation: pt.func.isRequired,
    forceRerender: pt.bool.isRequired,
  }

  renderCluster(cluster: Object) {
    return <ClusterMarker
      key={`${cluster.longitude} ${cluster.latitude}`}
      cluster={cluster} />
  }

  renderActivity(cluster: Object) {
    const activity = cluster.activities[0]
    return <ActivityMarker key={activity.id} activity={activity} {..._.pick(cluster, ['latitude', 'longitude'])} />
  }

  render() {
    const { area: { region, clusters }, forceRerender } = this.props

    return <Container style={{opacity: forceRerender ? 0.999 : 1}}>
      <MapView
        zoomEnabled={false}
        scrollEnabled={false}
        pitchEnabled={false}
        cacheEnabled={true}
        moveOnMarkerPress={false}
        rotateEnabled={false}
        style={StyleSheet.absoluteFillObject}
        customMapStyle={mapStyle}
        region={region}>
        {clusters.map(c => c.activities.length === 1 ? this.renderActivity(c) : this.renderCluster(c))}
      </MapView>
    </Container>
  }
}
