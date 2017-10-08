//@flow
import React from 'react'
import pt from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import { Container, getIconStyle } from './AddGroupButton.style'

export default class AddGroupButton extends React.Component {
  static propTypes = {
    goToAddGroup: pt.func.isRequired,
    canAddGroup: pt.bool.isRequired,
  }

  render() {
    const { goToAddGroup, canAddGroup } = this.props

    return <Container>
      <TouchableOpacity disabled={!canAddGroup} onPress={goToAddGroup}>
        <Icon name='plus' style={getIconStyle(canAddGroup)} />
      </TouchableOpacity>
    </Container>
  }
}
