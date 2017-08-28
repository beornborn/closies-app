//@flow
import React from 'react'
import pt from 'prop-types'
import MapView from 'react-native-maps'
import { NotificationContainer, Cluster, ChildrenNumber } from 'Closies/app/components/ClusterMarker.style'

export default class ClusterMarker extends React.Component {
  static propTypes = {
    cluster: pt.object.isRequired,
    goToCluster: pt.func.isRequired,
  }

  render() {
    const { cluster, goToCluster } = this.props

    return <MapView.Marker
      onPress={() => goToCluster(cluster.activities)}
      coordinate={{longitude: cluster.longitude, latitude: cluster.latitude}}>
      <NotificationContainer newEvents={false} createdAt={new Date()} >
        <Cluster createdAt={new Date()} >
          <ChildrenNumber createdAt={new Date()}>
            {cluster.activities.length}
          </ChildrenNumber>
        </Cluster>
      </NotificationContainer>
    </MapView.Marker>
  }
}
