//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Text } from 'Closies/app/components/shared/Common.style'
import { Container, Type } from './GroupItem.style'

export default class GroupItem extends React.Component {
  static propTypes = {
    group: pt.object.isRequired,
    goToGroupView: pt.func.isRequired,
  }

  render() {
    const { group, goToGroupView } = this.props

    return <TouchableOpacity onPress={() => goToGroupView(group.id)}>
      <Container>
        <Text>{group.name}</Text>
        <View style={{flex: 1}} />
        <Text>{5}</Text>
        <View style={{width: 20}} />
        <Type>{group.size_type}</Type>
      </Container>
    </TouchableOpacity>
  }
}
