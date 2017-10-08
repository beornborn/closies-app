//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, MUIIcon, TextButton } from 'Closies/app/components/__shared/Actions.style'

export default class GroupViewActions extends React.Component {
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
      <TouchableOpacity onPress={() => deleteGroup(group.id)}>
        <MUIIcon name='delete' style={{fontSize: 25}} />
      </TouchableOpacity>
      {isCurrentUserGroupOwner && <TouchableOpacity
        disabled={!canInviteUser}
        onPress={createInvite}
        style={{marginLeft: 20}}>
        <TextButton disabled={!canInviteUser}>Invite</TextButton>
      </TouchableOpacity>}
    </Container>
  }
}
