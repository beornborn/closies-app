//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Text } from 'react-native'
import FBSDK from 'react-native-fbsdk'
import { Container, Title } from './Login.style'
import { Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Login extends React.Component {
  static propTypes = {
    doLogin: pt.func.isRequired,
  }

  render() {
    const { doLogin } = this.props

    return <Container>
      <Title>Closies</Title>
      <View style={{height: 100}} />
      <Button upperCase={false} text='Login with Facebook' onPress={doLogin}
        icon={<Icon name='facebook-box' style={{color: '#fff', fontSize: 30, marginRight: 15}} />}
        style={{
          container: {backgroundColor: '#3B5998', width: '100%', height: 50},
          text: {color: '#fff', fontSize: 20}
        }}/>
    </Container>
  }
}
      // <View style={{height: 100}} />
      // <FBSDK.LoginButton
      //   readPermissions={['public_profile', 'email', 'user_birthday']}
      //     onLoginFinished={doLogin} />
