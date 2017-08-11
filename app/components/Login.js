//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Button } from 'react-native'
import FBSDK from 'react-native-fbsdk'

export default class Login extends React.Component {
  static propTypes = {
    doLogin: pt.func.isRequired,
    navigation: pt.object.isRequired,
  }

  render() {
    const { doLogin, navigation } = this.props

    return <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: 100}} />
        <Button onPress={() => navigation.navigate('Main')} title='map' />
        <FBSDK.LoginButton
          style={{padding: 40}}
          readPermissions={['public_profile', 'email', 'user_birthday']}
          onLoginFinished={doLogin} />
      </View>
    </View>
  }
}
