//@flow
import React from 'react'
import { Animated, Easing } from 'react-native'
import pt from 'prop-types'
import MapView from 'react-native-maps'
import { NotificationContainer, Avatar } from './ActivityMarker.style'

export default class ActivityMarker extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired,
    goToActivity: pt.func.isRequired,
    latitude: pt.number.isRequired,
    longitude: pt.number.isRequired,
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
    const { activity, goToActivity, latitude, longitude } = this.props

    return <MapView.Marker.Animated
      style={{opacity: this.state.fadeAnim}}
      key={activity.id}
      coordinate={{latitude, longitude}}
      onPress={() => goToActivity(activity.id)}>
      <NotificationContainer color={activity.user_in_group.color} newEvents={false} createdAt={activity.created_at} >
        <Avatar
          color={activity.user_in_group.color}
          createdAt={activity.created_at}
          source={{uri: activity.user_in_group.user.picture}} />
      </NotificationContainer>
    </MapView.Marker.Animated>
  }
}
