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
import { Container, ActionButtonIconStyle, ActionButtonStyle } from './Area.style'

export default class Area extends Component {
  static propTypes = {
    area: pt.shape({
      clusters: pt.arrayOf(pt.object).isRequired,
      region: pt.object.isRequired,
    }).isRequired,
    createActivity: pt.func.isRequired,
    fetchActivities: pt.func.isRequired,
    forceRerender: pt.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchActivities()
  }

  renderCluster(cluster: Object) {
    return <ClusterMarker
      key={`${cluster.longitude} ${cluster.latitude}`}
      cluster={cluster} />
  }

  renderActivity(activity: Object) {
    return <ActivityMarker
      key={`${activity.longitude} ${activity.latitude}`}
      activity={activity} />
  }

  render() {
    const { createActivity, area: { region, clusters }, forceRerender } = this.props

    return (
      <Container style={{opacity: forceRerender ? 0.999 : 1}}>
        <MapView
          zoomEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          cacheEnabled={true}
          moveOnMarkerPress={false}
          style={StyleSheet.absoluteFillObject}
          customMapStyle={mapStyle}
          region={region}>
          {clusters.map(c => c.id ? this.renderActivity(c) : this.renderCluster(c))}
        </MapView>
        <ActionButton
          style={ActionButtonStyle}
          icon={<Icon name='plus' style={ActionButtonIconStyle} />}
          onPress={createActivity} />
      </Container>
    )
  }
}
