//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Container, Avatar, Name, Admin } from './UserItem.style'

export default class UserItem extends React.Component {
  static propTypes = {
    userInGroup: pt.object.isRequired,
    goToUser: pt.func.isRequired,
  }

  render() {
    const { userInGroup: uig, goToUser } = this.props

    return <TouchableOpacity onPress={() => goToUser(uig.user.id)}>
      <Container>
        <Avatar source={{uri: uig.user.picture}} />
        <Name>{uig.user.full_name}</Name>
        <View style={{flex: 1}} />
        {uig.owner && <Admin>admin</Admin>}
      </Container>
    </TouchableOpacity>
  }
}
