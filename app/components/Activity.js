//@flow
import React from 'react'
import { View, ScrollView } from 'react-native'
import pt from 'prop-types'
import { humanDate } from 'Closies/app/utils/ViewDecorators'
import { FullWidthImage } from 'Closies/app/components/shared'
import { Container, Avatar, HeaderContainer, Header, Name, Created, Content } from './Activity.style'

export default class Activity extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired
  }

  render() {
    const { activity } = this.props

    return <Container>
      <HeaderContainer>
        <Avatar source={{uri: activity.user_in_group.user.picture}} />
        <Header>
          <Name>{activity.user_in_group.user.full_name}</Name>
          <Created>{humanDate(activity.created_at)} &bull; at {activity.latitude}</Created>
        </Header>
      </HeaderContainer>
      <ScrollView>
        <Content>{activity.description}</Content>
        <View style={{height: 10}} />
        {activity.image_url && <FullWidthImage source={{uri: activity.image_url}} />}
      </ScrollView>
    </Container>
  }
}
