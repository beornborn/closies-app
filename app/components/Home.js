//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import FBSDK from 'react-native-fbsdk'

export default class Home extends React.Component {
  static propTypes = {
    doTest: pt.func.isRequired,
    doLogin: pt.func.isRequired,
    test: pt.bool.isRequired,
  }

  render() {
    const { test, doTest, doLogin } = this.props

    return <View>
      <Text>welcome</Text>
      <Button onPress={Actions.mapp} title='go to map' />
      <Button onPress={doTest} title='do test' />
      {test && <Text>redux works!</Text>}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: 100}} />
        <FBSDK.LoginButton
          style={{padding: 40}}
          readPermissions={['public_profile', 'email', 'user_birthday']}
          onLoginFinished={doLogin} />
      </View>
    </View>
  }
}
