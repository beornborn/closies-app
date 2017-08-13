//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Text } from 'react-native'
import { Container, Avatar, AvatarContainer } from './Activity.style'

export default class Activity extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired
  }

  render() {
    const { activity } = this.props

    return <Container>
      <AvatarContainer>
        <Avatar source={{uri: activity.user.picture}} />
      </AvatarContainer>
      <View style={{height: 40}} />
      <Text>{activity.description}</Text>
    </Container>
  }
}
