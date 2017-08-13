//@flow
import React, { Component } from 'react'
import pt from 'prop-types'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ActionButton } from 'react-native-material-ui'
import ActivityMarker from 'Closies/app/containers/ActivityMarker'
import { Container, ActionButtonIconStyle, ActionButtonStyle } from './Area.style'

export default class Area extends Component {
  static propTypes = {
    activities: pt.arrayOf(pt.object).isRequired,
    createActivity: pt.func.isRequired,
    fetchActivities: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchActivities()
  }

  render() {
    const { createActivity, activities } = this.props

    const region = {
      latitude: 50.445483,
      longitude: 30.596962,
      latitudeDelta: 0.0152,
      longitudeDelta: 0.0002,
    }

    return (
      <Container>
        <MapView
          zoomEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          cacheEnabled={true}
          moveOnMarkerPress={false}
          style={StyleSheet.absoluteFillObject}
          region={region}>
          {activities.map(a => <ActivityMarker key={a.id} activity={a} />)}
        </MapView>
        <ActionButton
          style={ActionButtonStyle}
          icon={<Icon name='location-on' style={ActionButtonIconStyle} />}
          onPress={createActivity} />
      </Container>
    )
  }
}
