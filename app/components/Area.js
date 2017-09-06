//@flow
import React, { Component } from 'react'
import pt from 'prop-types'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ActionButton } from 'react-native-material-ui'
import ClusterMarker from 'Closies/app/containers/ClusterMarker'
import ActivityMarker from 'Closies/app/containers/ActivityMarker'
import { mapStyle } from 'Closies/app/__config/Theme'
import _ from 'lodash'
import { Container, ActionButtonStyle } from './Area.style'

export default class Area extends Component {
  static propTypes = {
    area: pt.shape({
      clusters: pt.arrayOf(pt.object).isRequired,
      region: pt.object.isRequired,
    }).isRequired,
    newActivity: pt.func.isRequired,
    fetchCurrentLocation: pt.func.isRequired,
    forceRerender: pt.bool.isRequired,
  }

  shouldComponentUpdate() {
    // console.log('props', this.props, nextPops)
    return true
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
    const { newActivity, area: { region, clusters }, forceRerender } = this.props

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
      <ActionButton
        style={ActionButtonStyle}
        actions={[<Icon name='plus' />]}
        onPress={newActivity} />
    </Container>
  }
}
