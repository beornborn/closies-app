//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import { Container, Toolbar, Invite, DeleteIcon } from './GroupViewToolbar.style'

export default class GroupViewToolbar extends React.Component {
  static propTypes = {
    group: pt.object.isRequired,
    createInvite: pt.func.isRequired,
    deleteGroup: pt.func.isRequired,
    canInviteUser: pt.bool.isRequired,
    isCurrentUserGroupOwner: pt.bool.isRequired,
  }

  render() {
    const { createInvite, canInviteUser, isCurrentUserGroupOwner, deleteGroup, group } = this.props

    return <Container>
      {isCurrentUserGroupOwner && <Toolbar>
        <TouchableOpacity onPress={() => deleteGroup(group.id)}>
          <DeleteIcon name='delete' />
        </TouchableOpacity>
        <View style={{width: 20}} />
        <TouchableOpacity disabled={!canInviteUser} onPress={createInvite}>
          <Invite disabled={!canInviteUser}>Invite</Invite>
        </TouchableOpacity>
      </Toolbar>}
    </Container>
  }
}
