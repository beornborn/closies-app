//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Container, Avatar, Name } from 'Closies/app/components/groups__group/UserItem.style'

export default class UserItem extends React.Component {
  static propTypes = {
    user: pt.object.isRequired,
    onPress: pt.func.isRequired,
    selected: pt.bool,
  }

  static defaultProps = {selected: false}

  render() {
    const { user, onPress, selected } = this.props

    return <TouchableOpacity onPress={() => onPress(user)}>
      <Container selected={selected}>
        <Avatar source={{uri: user.picture}} />
        <Name selected={selected}>{user.full_name}</Name>
        <View style={{flex: 1}} />
      </Container>
    </TouchableOpacity>
  }
}
