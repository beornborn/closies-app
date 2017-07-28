//@flow
import React, { Component } from 'react'
import pt from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})

export default class Closies extends Component {
  static propTypes = {
    checkIns: pt.arrayOf(pt.object).isRequired,
    doCheckIn: pt.func.isRequired,
    fetchCheckIns: pt.func.isRequired,
  }

  state = {
    region: {
      latitude: 50.449483,
      longitude: 30.596962,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0001,
    },
  }

  componentDidMount() {
    this.props.fetchCheckIns()
  }

  // onRegionChange(region) {
  //   this.setState({ region })
  // }

  render() {
    const { doCheckIn, checkIns } = this.props
    console.log(checkIns)
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}>
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
          icon={<Icon name='location-on' style={styles.actionButtonIcon} />}
          onPress={doCheckIn} />
        <Text style={{height: 100, fontSize: 30}}>1</Text>
      </View>
    )
  }
}
