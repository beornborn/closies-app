//@flow
import React from 'react'
import pt from 'prop-types'
import { View } from 'react-native'
import { Text } from 'Closies/app/components/shared/Common.style'

export default class GroupView extends React.Component {
  static propTypes = {
    group: pt.object.isRequired,
  }

  render() {
    const { group } = this.props

    return <View>
      <Text>{group.name}</Text>
    </View>
  }
}
