//@flow
import React from 'react'
import pt from 'prop-types'
import { Image } from 'react-native'
import MapView from 'react-native-maps'
import moment from 'moment'

export default class ActivityMarker extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired,
    goToActivity: pt.func.isRequired,
  }

  state = { initialRender: 'false' }

  getOpacity = () => {
    const secondsNow = Math.round(Date.now() / 1000)
    const activityCreatedAt = moment(this.props.activity.created_at).unix()
    const secondsPast = secondsNow - activityCreatedAt
    const secondsInDay = 24 * 60 * 60
    const percentPast = Math.round(secondsPast * 100 / secondsInDay)
    if (percentPast <= 25) { return 1 }
    else if (percentPast <= 50) { return 0.7 }
    else if (percentPast <= 75) { return 0.45 }
    else { return 0.2 }
  }

  render() {
    const { activity, goToActivity } = this.props

    const opacity = this.getOpacity()

    return <MapView.Marker
      key={activity.id}
      coordinate={activity.latlng}
      onPress={() => goToActivity(activity.id)}>
      <Image
        style={{width: 40, height: 40, borderRadius: 20, borderColor: activity.color, borderWidth: 4, opacity }}
        onLayout={() => this.setState({initialRender: 'true'})}
        key={this.state.initialRender}
        source={{uri: activity.user.picture}} />
    </MapView.Marker>
  }
}
