//@flow
import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import pt from 'prop-types'
import { humanDate } from 'Closies/app/utils/ViewDecorators'
import { FullWidthImage } from 'Closies/app/components/__shared'
import Comment from 'Closies/app/containers/activities__activity/Comment'
import NewComment from 'Closies/app/containers/activities__activity/NewComment'
import { Container, Avatar, HeaderContainer, Header, Name, Created,
  Content, CheckedBy, CheckedByTitle, CheckedAvatar, CheckedAvatarContainer } from './Activity.style'

export default class Activity extends React.Component {
  static propTypes = {
    activity: pt.object.isRequired,
    goToUser: pt.func.isRequired,
    checkActivity: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.checkActivity(this.props.activity)
  }

  render() {
    const { activity, goToUser } = this.props
    const checkedUsers = activity.checked.filter(u => u.id !== activity.user_in_group.user_id)

    return <Container>
      <TouchableOpacity onPress={() => goToUser(activity.user_in_group.user.id)}>
        <HeaderContainer>
          <Avatar source={{uri: activity.user_in_group.user.picture}} />
          <Header>
            <Name>{activity.user_in_group.user.full_name}</Name>
            <Created>{humanDate(activity.created_at)} &bull; at {activity.latitude}</Created>
            <CheckedBy>
              <CheckedByTitle>Checked by {checkedUsers.length === 0 ? 'no one' : ''}</CheckedByTitle>
              <CheckedAvatarContainer>
                {checkedUsers.map(user =>
                  <CheckedAvatar key={user.id} source={{uri: user.picture}} />
                )}
              </CheckedAvatarContainer>
            </CheckedBy>
          </Header>
        </HeaderContainer>
      </TouchableOpacity>
      <ScrollView>
        <Content>{activity.description}</Content>
        <View style={{height: 10}} />
        {activity.image_url && <FullWidthImage source={{uri: activity.image_url}} />}
        {activity.comments.map(comment =>
          <Comment comment={comment} key={comment.id} />
        )}
      </ScrollView>
      <NewComment />
    </Container>
  }
}
