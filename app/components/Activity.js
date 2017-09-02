//@flow
import React from 'react'
import pt from 'prop-types'
import { View } from 'react-native'
import { humanDate } from 'Closies/app/utils/ViewDecorators'
import { Text } from 'Closies/app/components/shared/Common.style'
import { Container, Avatar, HeaderContainer, Header, Name, Created, Content, Place } from './Activity.style'

export default class Activity extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired
  }

  render() {
    const { activity } = this.props

    return <Container>
      <HeaderContainer>
        <Avatar source={{uri: activity.user.picture}} />
        <Header>
          <Name>{activity.user.full_name}</Name>
          <Created>{humanDate(activity.created_at)} &bull; at {activity.latitude}</Created>
        </Header>
      </HeaderContainer>
      <Content>{activity.description}</Content>
    </Container>
  }
}
