//@flow
import React from 'react'
import pt from 'prop-types'
import { View } from 'react-native'
import FBSDK from 'react-native-fbsdk'

export default class Home extends React.Component {
  static propTypes = {
    doLogin: pt.func.isRequired,
  }

  render() {
    const { doLogin } = this.props

    return <View>
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
