//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import GroupItem from 'Closies/app/containers/groups/GroupItem'
import { Text, AccentText } from 'Closies/app/components/shared/Common.style'
import { Container, Centered } from './Groups.style'

export default class Groups extends React.Component {
  static propTypes = {
    groups: pt.arrayOf(pt.object).isRequired
  }

  noClosies() {
    return <Centered>
      <Text>You don't have closies yet.</Text>
      <View style={{height: 15}} />
      <TouchableOpacity onPress={console.log}>
        <AccentText>Add new group of closies now!</AccentText>
      </TouchableOpacity>
    </Centered>
  }

  render() {
    const { groups } = this.props

    return <Container>
      {groups.length === 0 && this.noClosies()}
      {groups.map(group =>
        <GroupItem key={group.id} group={group} />
      )}
    </Container>
  }
}
