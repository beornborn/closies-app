//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Container, Type, Text } from './GroupItem.style'

export default class GroupItem extends React.Component {
  static propTypes = {
    group: pt.object.isRequired,
    onPress: pt.func.isRequired,
    selected: pt.bool,
  }

  static defaultProps = {selected: false}

  render() {
    const { group, onPress, selected } = this.props

    return <TouchableOpacity onPress={() => onPress(group)}>
      <Container selected={selected}>
        <Text selected={selected}>{group.name}</Text>
        <View style={{flex: 1}} />
        <Text selected={selected}>{group.user_in_groups.length}</Text>
        <View style={{width: 20}} />
        <Type selected={selected}>{group.size_type}</Type>
      </Container>
    </TouchableOpacity>
  }
}
