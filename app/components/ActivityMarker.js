//@flow
import React from 'react'
import pt from 'prop-types'
import MapView from 'react-native-maps'
import { NotificationContainer, Avatar } from 'Closies/app/components/ActivityMarker.style'

export default class ActivityMarker extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired,
    goToActivity: pt.func.isRequired,
  }

  state = { initialRender: 'false' }

  showMarker = () => setTimeout(() => this.setState({initialRender: 'true'}), 400)

  render() {
    const { activity, goToActivity } = this.props

    return <MapView.Marker
      key={activity.id}
      coordinate={activity.latlng}
      onPress={() => goToActivity(activity.id)}>
      <NotificationContainer color={activity.color} newEvents={false} createdAt={activity.created_at} >
        <Avatar
          color={activity.color}
          createdAt={activity.created_at}
          onLayout={this.showMarker}
          key={this.state.initialRender}
          source={{uri: activity.user.picture}} />
      </NotificationContainer>
    </MapView.Marker>
  }
}
