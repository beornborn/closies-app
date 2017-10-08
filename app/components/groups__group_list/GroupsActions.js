//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, MUIIcon } from 'Closies/app/components/__shared/Actions.style'

export default class GroupsActions extends React.Component {
  static propTypes = {
    goToAddGroup: pt.func.isRequired,
    canAddGroup: pt.bool.isRequired,
  }

  render() {
    const { goToAddGroup, canAddGroup } = this.props

    return <Container>
      <TouchableOpacity disabled={!canAddGroup} onPress={goToAddGroup}>
        <MUIIcon name='plus' disabled={!canAddGroup} />
      </TouchableOpacity>
    </Container>
  }
}
