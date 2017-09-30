//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, Invite } from './InviteButton.style'

export default class InviteButton extends React.Component {
  static propTypes = {
    createInvite: pt.func.isRequired,
    canInviteUser: pt.bool.isRequired,
    isCurrentUserGroupOwner: pt.bool.isRequired,
  }

  render() {
    const { createInvite, canInviteUser, isCurrentUserGroupOwner } = this.props

    return <Container>
      {isCurrentUserGroupOwner && <TouchableOpacity disabled={!canInviteUser} onPress={createInvite}>
        <Invite disabled={!canInviteUser}>Invite</Invite>
      </TouchableOpacity>}
    </Container>
  }
}
