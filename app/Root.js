import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default class Closies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 50.449483,
        longitude: 30.596962,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0001,
      },
      markers: [{
        latlng: {
          latitude: 50.449483,
          longitude: 30.596962,
        },
        title: 'tolya bil zdes',
        description: 'ochen tolstiy tolya'
      }]
    }
  }

  // onRegionChange(region) {
  //   this.setState({ region })
  // }

  render() {
    // console.warn(123)
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}>
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description} />
          ))}
        </MapView>
        <Text style={{height: 100, fontSize: 30}}>1</Text>
      </View>
    )
  }
}
