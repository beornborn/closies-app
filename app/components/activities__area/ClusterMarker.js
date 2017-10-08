//@flow
import React from 'react'
import { Animated, Easing } from 'react-native'
import pt from 'prop-types'
import MapView from 'react-native-maps'
import { NotificationContainer, Cluster, ChildrenNumber } from './ClusterMarker.style'

export default class ClusterMarker extends React.Component {
  static propTypes = {
    cluster: pt.object.isRequired,
    goToCluster: pt.func.isRequired,
  }

  state = { fadeAnim: new Animated.Value(0) }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        easing: Easing.ease,
        duration: 1000,
      }
    ).start()
  }

  render() {
    const { cluster, goToCluster } = this.props

    return <MapView.Marker.Animated
      style={{opacity: this.state.fadeAnim}}
      onPress={() => goToCluster(cluster.activities)}
      coordinate={{longitude: cluster.longitude, latitude: cluster.latitude}}>
      <NotificationContainer newEvents={false} createdAt={new Date()} >
        <Cluster createdAt={new Date()} >
          <ChildrenNumber createdAt={new Date()}>
            {cluster.activities.length}
          </ChildrenNumber>
        </Cluster>
      </NotificationContainer>
    </MapView.Marker.Animated>
  }
}
