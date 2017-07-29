//@flow
import React, { Component } from 'react'
import pt from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, ActionButtonIconStyle } from './Map.style'

export default class Closies extends Component {
  static propTypes = {
    checkIns: pt.arrayOf(pt.object).isRequired,
    doCheckIn: pt.func.isRequired,
    fetchCheckIns: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCheckIns()
  }

  render() {
    const { doCheckIn, checkIns } = this.props

    const region = {
      latitude: 50.449483,
      longitude: 30.596962,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0001,
    }

    return (
      <Container>
        <MapView
          style={StyleSheet.absoluteFillObject}
          region={region}>
          {checkIns.map(checkIn => (
            <MapView.Marker
              key={checkIn.title}
              coordinate={checkIn.latlng}
              title={checkIn.title}
              description={checkIn.description} />
          ))}
        </MapView>
        <ActionButton
          buttonColor='rgba(231,76,60,1)'
          icon={<Icon name='location-on' style={ActionButtonIconStyle} />}
          onPress={doCheckIn} />
        <Text style={{height: 100, fontSize: 30}}>1</Text>
      </Container>
    )
  }
}
