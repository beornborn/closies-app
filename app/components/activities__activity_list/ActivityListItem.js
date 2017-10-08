//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableNativeFeedback } from 'react-native'
import moment from 'moment'
import _ from 'lodash'
import { Container, Avatar, Content, Header, Name, CreatedAt, Description } from './ActivityListItem.style'

export default class ActivityListItem extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired,
    goToActivity: pt.func.isRequired,
  }

  render() {
    const { activity, goToActivity } = this.props

    return <TouchableNativeFeedback onPress={goToActivity}>
      <Container>
        <Avatar color={activity.user_in_group.color} source={{uri: activity.user_in_group.user.picture}} />
        <Content>
          <Header>
            <Name>{activity.user_in_group.user.full_name}</Name>
            <CreatedAt>{moment(activity.created_at).calendar(null, {sameDay: 'h:mm a'})}</CreatedAt>
          </Header>
          <View style={{height: 8}} />
          <Description>{_.truncate(activity.description, {length: 35})}</Description>
        </Content>
      </Container>
    </TouchableNativeFeedback>
  }
}
