//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Home extends React.Component {
  static propTypes = {
    doTest: pt.func.isRequired,
    test: pt.bool.isRequired,
  }

  render() {
    const { test, doTest } = this.props

    return <View>
      <Text>welcome</Text>
      <Button onPress={Actions.mapp} title='go to map' />
      <Button onPress={doTest} title='do test' />
      {test && <Text>redux works!</Text>}
    </View>
  }
}
