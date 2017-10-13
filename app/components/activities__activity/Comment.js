//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { humanDate } from 'Closies/app/utils/ViewDecorators'
import { Container, Avatar, Content, Name, Body, Footer, CheckedAvatar,
  CheckedAvatarContainer, DateView } from './Comment.style'

export default class Comment extends React.Component {
  static propTypes = {
    comment: pt.object.isRequired,
    goToUser: pt.func.isRequired,
  }

  render() {
    const { comment, goToUser } = this.props
    const checkedUsers = comment.checked.filter(u => u.id !== comment.user_id)

    return <Container>
      <TouchableOpacity onPress={() => goToUser(comment.user.id)}>
        <Avatar source={{uri: comment.user.picture}} />
      </TouchableOpacity>
      <Content>
        <TouchableOpacity onPress={() => goToUser(comment.user.id)}>
          <Name>{comment.user.full_name}</Name>
        </TouchableOpacity>
        <Body>{comment.body}</Body>
        <Footer>
          <DateView>{humanDate(comment.created_at)}</DateView>
          <CheckedAvatarContainer>
            {checkedUsers.map(user =>
              <CheckedAvatar key={user.id} source={{uri: user.picture}} />
            )}
          </CheckedAvatarContainer>
        </Footer>
      </Content>
    </Container>
  }
}
