//@flow
import React from 'react'
import pt from 'prop-types'
import { Image } from 'react-native'
import MapView from 'react-native-maps'

export default class ActivityMarker extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired,
    goToActivity: pt.func.isRequired,
  }

  state = { initialRender: 'false' }

  render() {
    const { activity, goToActivity } = this.props

    return <MapView.Marker
      key={activity.id}
      coordinate={activity.latlng}
      onPress={() => goToActivity(activity.id)}>
      <Image
        style={{width: 40, height: 40, borderRadius: 20, borderColor: '#039BE5', borderWidth: 2}}
        onLayout={() => this.setState({initialRender: 'true'})}
        key={this.state.initialRender}
        source={{uri: activity.user.picture}} />
    </MapView.Marker>
  }
}
